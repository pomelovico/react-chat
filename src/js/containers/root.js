/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory,browserHistory,IndexRoute,useRouterHistory} from 'react-router';
import { createHistory} from 'history';

import configureStore from '../store/configStore';
import rootReducer from '../reducers';

import App from './app';
import Chatroom from './chatroom';
import ChatList from './chatList';
import Login from './login';
import Home from './home';


const appHistory = useRouterHistory(createHistory)({
    basename: '/Projects/react-chat/'        // 根目录名
});
// /*创建增强型的store来支持异步action*/
let store =  configureStore(rootReducer);

export default class Root extends Component{
    render(){
        return(<Provider store = {store}>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
                <Route path='/' component={App} >
                    <IndexRoute component={Home}/>
                    <Route path='login' component={Login}/>
                    <Route path='chatlist' component={ChatList}/>
                    <Route path='chatroom/:id' component={Chatroom}/>
                </Route>
            </Router>
        </Provider>)
    }
}