/**
 * Created by LikoLu on 2016/5/10.
 */
var wsServer = 'ws://localhost:8888/';
var websocket = new WebSocket(wsServer);
websocket.binaryType = "arraybuffer";
websocket.onopen = function(event){
    console.log('open');
    websocket.send('I am the client and I\'m listening!');

};
websocket.onclose = function(e){
    console.log('close',e);
};
websocket.onmessage = function(e){
    console.log('received message');
    console.log(e);
};