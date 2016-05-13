/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends Component{
    toLogin(){
        let name = this.refs.name.value;
        let pwd = this.refs.pwd.value;
        if(name && pwd){
            this.props.login('login',{username:name, userpwd:pwd})
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props);
        console.log(nextProps);
    }
    render() {
        return (<div id="login-page" >
            <div>
                <label >name:</label><input  type="text" ref="name" /><br/>
                <label >password:</label><input type="password" ref="pwd"  /><br/>
                <button onClick={()=>this.toLogin()} className="btn btn-block" >login</button>
            </div>
        </div>)
    }
}
export default connect(state=>{
    return {
        user:state.user
    }
},dispatch=>{
    let actions = bindActionCreators(Action.user, dispatch);
    return {
        login:actions.login
    }
})(Login)