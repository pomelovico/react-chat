/**
 * Created by LikoLu on 2016/5/13.
 */
export default function user(state,action){
    switch(action.type){
        case Common.user.LOGIN: return Object.assign({},state,{islogin:action.data.islogin});
        default: return state;
    }
}