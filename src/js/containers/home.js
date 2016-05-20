/**
 * Created by Vico on 2016.05.20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component{
    render() {
        return (<div id="home-page">
            <h2>Willcome to react-chatting room !</h2>
            <Link  to="login">Login</Link>
        </div>)
    }
}