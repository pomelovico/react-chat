/**
 * Created by LikoLu on 2016/5/13.
 */
import objectAssign from 'object-assign';

export default function user(state,action){
    switch(action.type){
        case Common.user.LOGIN:return objectAssign({},state,{islogin:action.data.islogin,user:action.data.user});
        default: return state;
    }
}