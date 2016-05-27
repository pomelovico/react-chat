/**
 * Created by Vico on 2016.05.20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ChatList extends Component{
    componentWillMount(){
        if(this.props.userinfo.islogin){
            this.props.getChatList('chatlist',{
                userid: this.props.userinfo.user.id
            });
            this.props.buildConnect({
                userid: this.props.userinfo.user.id,
                username:this.props.userinfo.user.name
            });
        }else{
            // this.props.autoLogin('login');
            this.context.router.push('login');
        }
    }
    buildChatList(){
        let temp = [];
        this.props.userinfo.friends.map((v,k)=>{
            temp.push(<li key={k}>
                <Link to={`chatroom/${v.userid}`}>{v.username}</Link>
            </li>)
        });
        return (<ul>{temp}</ul>)
    }
    toLoginout(){
        this.props.logout();
    }
    render(){
        return (<div id="chat-room">
            <h2>Hello {this.props.userinfo.user.name}</h2>
            <br/>
            <h5>Friends list:</h5>
            {this.buildChatList()}
            <br/>
            <button type="button" onClick={()=>this.toLoginout()} className="btn btn-default" >login out</button>
        </div>)
    }
}

ChatList.contextTypes = {
    router:React.PropTypes.object.isRequired
};

export default connect(state=>{
    return {
        userinfo: state.userinfo
    }
},dispatch=>{
    let userActions = bindActionCreators(Action.user, dispatch);
    let chatActions = bindActionCreators(Action.chat, dispatch);
    return {
        getChatList:userActions.getChatList,
        logout:userActions.logout,
        buildConnect:chatActions.buildConnect,
        autoLogin:userActions.autoLogin
    }
})(ChatList)