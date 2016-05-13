/**
 * Created by LikoLu on 2016/5/13.
 */
import objectAssign from 'object-assign';

export default function chat(state,action){
    switch(action.type){
        case Common.user.LOGIN:return objectAssign({},state,{islogin:action.data.islogin});
        default: return state;
    }
}