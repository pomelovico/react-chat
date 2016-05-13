/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component{
    render() {
        return (<div id="home-page">
            <h2>Willcome to react-chatting room !</h2>
            <Link  to="login">Login</Link>
        </div>)
    }
}