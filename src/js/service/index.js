/**
 * Created by LikoLu on 2016/5/13.
 */
import fetch from 'isomorphic-fetch';

function fetchPost(url, data) {
    return fetch(`http://localhost:8000/${url}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({body: data})
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
export const request = {
    post:fetchPost,
    get:fetchGet
};