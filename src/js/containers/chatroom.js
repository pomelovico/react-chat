/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ChatRecordsItem extends Component{
    render(){
        const{from,msg} = this.props;
        return (<div>
            <span>{from}:</span><span>{msg}</span>
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
    buildRecords(){
        let temp = [];
        this.props.chatroom.records.map((v,k)=>{
            temp.push(<ChatRecordsItem key={k} from={v.from} msg={v.msg} />)
        });
        return (<div>{temp}</div>)
    }


    sendMessage(){
/*        this.props.sendMessage({
            userid: this.props.userinfo.user.id,
            username: this.props.userinfo.user.name,
            content: this.refs.message.value
        });*/
        this.props.sendMessage({
            userid: this.props.userinfo.user.id,
            username: this.props.userinfo.user.name,
            to:this.refs.to.value,
            msg: this.refs.message.value,
        });
    }
    render(){
        return (<div id="chat-room">
            <h2>here is chatting room</h2>
            <label >say something:</label><input  type="text" ref="message" /><br/>
            <label >to:</label><input  type="text" ref="to" /><br/>
            <button onClick={()=>this.sendMessage()}>send</button>
            <hr/>
            {this.buildRecords()}
        </div>)
    }
}

Chatroom.contextTypes = {
    router:React.PropTypes.object.isRequired
};
export default connect(state=>{
    return {
        chatroom: state.chatroom,
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