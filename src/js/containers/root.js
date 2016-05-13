/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
// import {Provider} from 'react-redux';
import Login from './login';
import App from './app';
import {Router, Route, browserHistory} from 'react-router';

// import configureStore from '../store/configStore';
// import rootReducer from '../reducers';
//
// /*创建增强型的store来支持异步action*/
// let store =  configureStore(rootReducer);

export default class Root extends Component{
    render(){
        return(<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='login' component={Login}/>
            </Route>
        </Router>)
    }
}