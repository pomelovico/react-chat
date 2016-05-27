/**
 * Created by LikoLu on 2016/5/13.
 */
import {service} from '../service';

let request = service.request,
    COOKIE = service.COOKIE;

export function login(url,data){
    return (dispatch)=> {
        return request.post(`api/${url}`, data)
            .then(res=> {
                console.log(res);
                if(res.status){
                    COOKIE.setCookie('name',res.Content.user.name);
                    dispatch({
                        type: Common.user.LOGIN,
                        data: res.Content
                    });
                }
            })
    }
}
export function autoLogin(url){
    if(COOKIE.getCookie('name')){
        return (dispatch)=> {
            return request.post(`api/${url}`,{username:COOKIE.getCookie('name')})
                .then(res=> {
                    dispatch({
                        type: Common.user.LOGIN,
                        data: res.Content
                    });
                })
        }
    }else{
        return (dispatch)=> {
        }
    }
    
}
export function logout(){
    COOKIE.delCookie('name');
    return (dispatch)=> {
        dispatch({
            type: Common.user.LOGOUT,
            data: {
                islogin:false,
                user:{},
                friends:[]
            }
        });
    }
}
export function getChatList(url,data){
    return dispatch=>{
        return request.post(`api/${url}`, data).then(res=> {
            dispatch({
                type: Common.user.GET_CHATLIST,
                data: res.Content
            });
        })
    }
}