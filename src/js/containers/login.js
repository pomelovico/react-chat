/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class Login extends Component{
    toLogin(){
        let name = this.refs.name.value;
        let pwd = this.refs.pwd.value;

        if(name && pwd){
            this.props.login('login',{username:name, userpwd:pwd});
        }
    }
    componentWillMount(){
        this.props.autoLogin('login');
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.islogin) {
            this.context.router.push('chatlist');
        }
    }
    render() {
        return (<div id="login-page" >
            <from role="form">
                <div className="form-group">
                    <label >name:</label><input  type="text" ref="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label >password:</label><input type="password" ref="pwd" className="form-control" />
                </div>
                <button type="button" onClick={()=>this.toLogin()} className="btn btn-success btn-block" >login</button>
            </from>
            <br/>
            <Link to='user/register'>don't have account? go to register</Link>
        </div>)
    }
}

Login.contextTypes = {
    router:React.PropTypes.object.isRequired
}

export default connect(state=>{
    return {
        user:state.userinfo
    }
},dispatch=>{
    let actions = bindActionCreators(Action.user, dispatch);
    return {
        login:actions.login,
        autoLogin:actions.autoLogin
    }
})(Login)