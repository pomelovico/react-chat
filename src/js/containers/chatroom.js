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
    componentDidMount(){

    }
    render(){
        const name = 'hello';
        return (<div id="chat-room">
            <h2>here is chatting room</h2>
            <User username={this.props.username}/>
        </div>)
    }
}
export default connect(state=>{
    return {
        chat: state.chat
    }
},dispatch=>{
    return {}
})(Chatroom)