/**
 * Created by LikoLu on 2016/5/13.
 */
var socket = '';
var isConnected = false;
export function buildConnect(data){
    return dispatch=>{
        isConnected ? null :
            socket = io.connect(`ws://${Common.common.localHost}:8001`);
        isConnected = true;
        socket.emit('login',data);
        socket.on('login',(o)=>{
            dispatch({
                type:Common.chat.LOGIN,
                data:o
            });
        });
        socket.on('logout',(o)=>{
            dispatch({
                type:Common.chat.LOGOUT,
                data:o
            });
        });
        socket.on('message',(msg)=>{
            dispatch({
                type:Common.chat.NEW_MESSAGE,
                data:msg
            });
        });
        socket.on('to'+data.userid,(data)=>{
            dispatch({
                type:Common.chat.PRIVATE_MESSAGE,
                data:data
            });
        })
    }
}

export function enterChatroom(data){
    return ()=>{
        socket.emit('login',data);
    }
}
export function sendMessage(data){
    return (dispatch)=>{
        dispatch({
            type:Common.chat.PRIVATE_MESSAGE,
            data:{
                from:data.username,
                to:data.to,
                msg:data.msg
            }
        });
        socket.emit('private message',data.username,data.to,data.msg);
    }
}

