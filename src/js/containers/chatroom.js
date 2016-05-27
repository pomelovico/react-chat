/**
 * Created by LikoLu on 2016/5/13.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ChatRecordsItem extends Component{
    render(){
        const{from,msg} = this.props;
        if(from) {
            return (<li>
                <div className="fr msg own">{msg}</div>
            </li>)
        }
        else{
            return(<li>
                <div className="fl msg friend">{msg}</div>
            </li>)
        }
    }
}

class Chatroom extends Component{
    componentWillMount(){
        
        this.props.userinfo.islogin || /*this.props.autoLogin('login');*/this.context.router.push('login');
    }
    buildRecords(){
        let temp = [];
        this.props.chatroom.records.map((v,k)=>{
            temp.push(<ChatRecordsItem key={k} from = {v.from == this.props.userinfo.user.name} msg={v.msg} />)
        });
        return (<ul className="msg-list">{temp}</ul>)
    }
    componentDidUpdate(){
        window.scrollTo(0, document.body.scrollHeight);
    }
    sendMessage(e){
        // e.persist()
        // console.log(e);
        if(this.refs.message.value&&e.keyCode == 13){
            this.props.sendMessage({
                userid: this.props.userinfo.user.id,
                username: this.props.userinfo.user.name,
                to:this.props.params.id,
                msg: this.refs.message.value,
            });
            this.refs.message.value = '';
        }
    }
    backToChatList(){
        this.context.router.goBack();
    }
    render(){
        let friend = '';
        const friends = this.props.userinfo.friends;
        for(let i =0; i < friends.length ;i++){
            if(this.props.params.id == friends[i].userid){
                friend = friends[i].username;
            }
        }
        return (<div id="chat-room">
            <div className="head-bar">
                <span 
                    onClick={()=>this.backToChatList()}
                    className="glyphicon glyphicon-chevron-left"
                >
                    back
                </span>
                <span className="chat-title">
                    chatting with {friend}
                </span>
            </div>
            <hr/>
            {this.buildRecords()}
            <div id="send-msg">
                <input
                    type="text"
                    ref="message"
                    className="form-control"
                    onKeyDown={(e)=>this.sendMessage(e)}
                />
            </div>
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
    let userActions = bindActionCreators(Action.user, dispatch);
    return {
        enterChatroom:actions.enterChatroom,
        sendMessage:actions.sendMessage,
        buildConnect:actions.buildConnect,
        autoLogin:userActions.autoLogin
    }
})(Chatroom)