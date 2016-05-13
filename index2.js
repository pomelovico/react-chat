/**
 * Created by LikoLu on 2016/5/10.
 */
var http= require('http');
var app = http.createServer(function(){
    console.log('response request');
}).listen(8888);

var WebScoketServer = require('ws').Server;
var wss = new WebScoketServer({
    server: app
});
console.log('listening...');

wss.on('connection',function(ws){
    console.log('connection successful!');
    ws.on('message',function(data,flags){
        console.log(data);
    });
    ws.on('close',function(){
        console.log('stop');
    });
})