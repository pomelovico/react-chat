/**
 * Created by LikoLu on 2016/5/13.
 */
import es6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
es6Promise.polyfill();


function fetchPost(url, data) {
    return fetch(`http://192.168.191.1:8001/${url}`, {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response=> {
        return response.json();
    })
}


function fetchGet(url) {
    return fetch(`http://192.168.191.1:8001/${url}`, {
        method: 'POST',
        mode: 'cors',
        headers: {"Content-Type": "application/json"}
    }).then(response=> {
        return response.json();
    })
}

function socketEmit(type,data){

}
function socketOn(type,callback){
    // return io.on(type,)
}

/*cookie*/
function setCookie(name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ encodeURI(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return decodeURI(arr[2]);
    else
        return null;
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
export const service = {
    request:{
        post:fetchPost,
        get:fetchGet
    },
    COOKIE:{
        setCookie,
        getCookie,
        delCookie
    }
    
};