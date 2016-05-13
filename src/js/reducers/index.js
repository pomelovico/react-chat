/**
 * Created by LikoLu on 2016/5/13.
 */
import user from './user';

const initialState = {
    userinfo:{
        islogin:false
    }
};

export default function rootReducer(state = initialState, action){
    return {
        userinfo: user(state.userinfo,action)
    }
}