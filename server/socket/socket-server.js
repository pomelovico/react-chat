/**
 * Created by LikoLu on 2016/5/13.
 */
// var mongo = require('./src/js/mongo');


var onlineUsers = {};
var onlineCount = 0;

var users = {};

module.exports = function(app){
    var io = require('socket.io')(app);
    io.sockets.on('connection',function(socket){
        console.log('a user connected');
        socket.on('login',function(obj){

            users[obj.userid] = socket;

            socket.name = obj.userid;
            if(!onlineUsers.hasOwnProperty(obj.userid)){
                onlineUsers[obj.userid] = obj.username;
                onlineCount++;
            }
            io.emit('login',{onlineUsers:onlineUsers,onlineCount:onlineCount,user:obj});
            console.log(obj.username+' login');
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
                console.log(obj.username+' logout');
            }
        });

        socket.on('message',function(obj){
            io.emit('message',obj);
            console.log(obj.username+' say '+obj.content);
        });
        socket.on('private message',function(from, to, msg){
            if(to in users){
                users[to].emit('to'+to,{from, to, msg})
            }
            console.log(from+' say '+ msg+' to '+to);
        });
    })
}