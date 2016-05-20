/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory,IndexRoute,useRouterHistory} from 'react-router';
import { createHistory,useBasename } from 'history';

const historyConfig = useRouterHistory(createHistory)({
    basename: '/Projects/react-chat/'        // 根目录名
});

import configureStore from '../store/configStore';
import rootReducer from '../reducers';

// /*创建增强型的store来支持异步action*/
let store =  configureStore(rootReducer);

import App from './app';
import Chatroom from './chatroom';
import Login from './login';
import Home from './home';


export default class Root extends Component{
    render(){
        return(<Provider store = {store}>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={historyConfig}>
                <Route path='/' component={App} >
                    <IndexRoute component={Home}/>
                    <Route path='login' component={Login}/>
                    <Route path='chatroom' component={Chatroom}/>
                </Route>
            </Router>
        </Provider>)
    }
}