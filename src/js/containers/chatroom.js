/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class User extends Component{
    render(){
        return (<div>
            <h5>{this.props.username}</h5>
        </div>)
    }
}

class Chatroom extends Component{
    componentWillMount(){
        this.props.userinfo.islogin
            ? this.props.buildConnect({
                userid: this.props.userinfo.user.id,
                username:this.props.userinfo.user.name
            })
            : this.context.router.push('login');
    }
    componentDidMount(){
        this.props.userinfo.islogin
            ? this.props.enterChatroom({
                userid: this.props.userinfo.user.id,
                username:this.props.userinfo.user.name
            })
            : this.context.router.push('login');
    }
    sendMessage(){
        this.props.sendMessage({
            userid: this.props.userinfo.user.id,
            username: this.props.userinfo.user.name,
            content: this.refs.message.value
        });
    }
    render(){
        return (<div id="chat-room">
            <h2>here is chatting room</h2>
            <label >say something:</label><input  type="text" ref="message" /><br/>
            <button onClick={()=>this.sendMessage()}>send</button>
        </div>)
    }
}

Chatroom.contextTypes = {
    router:React.PropTypes.object.isRequired
};
export default connect(state=>{
    return {
        chat: state.chat,
        userinfo: state.userinfo
    }
},dispatch=>{
    let actions = bindActionCreators(Action.chat, dispatch);
    return {
        enterChatroom:actions.enterChatroom,
        sendMessage:actions.sendMessage,
        buildConnect:actions.buildConnect
    }
})(Chatroom)