/**
 * Created by LikoLu on 2016/5/13.
 */
import {request} from '../service';

export function login(url,data){
    return (dispatch)=> {
        return request.post(`api/${url}`, data)
            .then(res=> {
                dispatch({
                    type: Common.user.LOGIN,
                    data: res.Content
                });
            })
    }
}
export function logout(url,data){
    return (dispatch)=> {
        return request.post(`api/${url}`, data).then(res=> {
            dispatch({
                type: Common.user.LOGOUT,
                data: res.Content
            });
        })
    }
}