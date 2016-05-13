/**
 * Created by LikoLu on 2016/5/13.
 */
import objectAssign from 'object-assign';

export default function chat(state,action){
    console.log(action);
    switch(action.type){
        case Common.chat.LOGIN:return objectAssign({},state,{islogin:action.data.islogin});
        case Common.chat.NEW_MESSAGE:return objectAssign({},state,{islogin:action.data.islogin});
        default: return state;
    }
}
