/**
 * Created by LikoLu on 2016/5/13.
 */
import es6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
es6Promise.polyfill();


function fetchPost(url, data) {
    return fetch(`http://localhost:8001/${url}`, {
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
    return fetch(`http://localhost:8000/${url}`, {
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
export const request = {
    post:fetchPost,
    get:fetchGet
};