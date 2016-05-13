/**
 * Created by LikoLu on 2016/5/10.
 */
var http = require('http');
// var app = require('express')();
// var Server = http.Server(app);
var Server = http.createServer();
var io = require('socket.io')(Server);

var mongo = require('./src/js/mongo');


var onlineUsers = {};
var onlineCount = 0;

io.on('connection',function(socket){
    console.log('a user connected');

    socket.on('login',function(obj){
        mongo.findUser(obj.username,function(flag){
            socket.name = obj.userid;
            if(!onlineUsers.hasOwnProperty(obj.userid)){
                onlineUsers[obj.userid] = obj.username;
                onlineCount++;
            }
            flag ? io.emit('login',{onlineUsers:onlineUsers,onlineCount:onlineCount,user:obj})
                : io.emit('login_failed',false)
            console.log(obj.username+' enter into chatting room');
        });
    });

    socket.on('disconnect',function(){
        if(onlineUsers.hasOwnProperty(socket.name)){
            var obj = {
                userid:socket.name,
                username:onlineUsers[socket.name]
            };
            delete onlineUsers[socket.name];
            onlineCount--;
            io.emit('logout',{onlineUsers:onlineUsers,onlineCount:onlineCount,user:obj});
            console.log(obj.username+' get out of chatting room');
        }
    });

    socket.on('message',function(obj){
        io.emit('message',obj);
        console.log(obj.username+' say '+obj.content);
    });
})


Server.listen(8001,function(){
    console.log('listening on 8001...');
});