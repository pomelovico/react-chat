/**
 * Created by LikoLu on 2016/5/13.
 */
import user from './user';
import chat from './chat';

const initialState = {
    userinfo:{
        islogin:false,
        user:{}
    },
    chatroom:''
};

export default function rootReducer(state = initialState, action){
    return {
        userinfo: user(state.userinfo,action),
        chatroom: chat(state.chatroom,action)
    }
}