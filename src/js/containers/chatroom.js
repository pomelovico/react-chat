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
        this.props.buildConnect({
            userid:(Math.random()*100).toFixed(0),
            username:'hhh'+(Math.random()*10).toFixed(0)
        });
    }
    componentDidMount(){
        this.props.enterChatroom({
            userid:(Math.random()*100).toFixed(0),
            username:'hhh'+(Math.random()*10).toFixed(0)
        });
    }
    sendMessage(){
        this.props.sendMessage({
            userid: '42424242',
            username: 'liko',
            content: 'helo'
        });
    }
    render(){
        return (<div id="chat-room">
            <h2>here is chatting room</h2>
            <button onClick={()=>this.sendMessage()}>send</button>
        </div>)
    }
}
export default connect(state=>{
    return {
        chat: state.chat
    }
},dispatch=>{
    let actions = bindActionCreators(Action.chat, dispatch);
    return {
        enterChatroom:actions.enterChatroom,
        sendMessage:actions.sendMessage,
        buildConnect:actions.buildConnect
    }
})(Chatroom)