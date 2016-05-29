/**
 * Created by Vico on 2016.05.27.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            [this.props.m_key]:'',
            isEmpty:false
        }
    }
    handleChange(){
        let value = this.refs[this.props.m_key].value;
        if(value){
            this.props.handleInput(value, this.props.m_key);
        }
        this.setState({isEmpty: value ? false : true});
    }
    render() {
        return(
            <div className="form-group row">
                <label className="col-sm-3 text-sm-right form-control-label">{this.props.m_key}:</label>
                <div className="col-sm-9" >
                    <input
                        type={this.props.type}
                        ref={this.props.m_key}
                        className="form-control"
                        onChange={()=>this.handleChange()}
                    />
                    {this.state.isEmpty? <span style={{fontSize:'13px',color:'#C50000'}} >{this.props.m_key} can't be empty.</span>:null}
                </div>
            </div>
        )
    }

}

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            Name:"",
            Phone:"",
            Profile:"",
            Password:"",
            RE_password:""
        };
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props);
        console.log(nextProps.user.islogin);
    }
    handleChange(value,key){
        this.setState({[key]:value});
    }
    toRegist(){
        const state = this.state;
        this.props.regist('user/regist',{
            name:state.Name,
            phone:state.Phone,
            profile:state.Profile,
            password:state.Password
        });
    }
    render() {
        return (<div id="regist-page" >
            <from className="form-horizontal row" role="form">
                <Input type="text" m_key="Name" handleInput={(value,key)=>this.handleChange(value,key)} />
                <Input type="text" m_key="Phone" handleInput={(value,key)=>this.handleChange(value,key)} />
                <Input type="text" m_key="Profile" handleInput={(value,key)=>this.handleChange(value,key)} />
                <Input type="password" m_key="Password" handleInput={(value,key)=>this.handleChange(value,key)} />
                <Input type="password" m_key="RE_password" handleInput={(value,key)=>this.handleChange(value,key)} />
                <button
                    type="button"
                    onClick={()=>this.toRegist()}
                    className="btn btn-success col-sm-4 col-sm-offset-4" >register</button>
            </from>
            <div className="row">
                <Link to='login' className="col-sm-12 text-sm-center">has account? go to login</Link>
            </div>
        </div>)
    }
}

export default connect(state=>{
    return {
        user:state.userinfo
    }
},dispatch=>{
    let actions = bindActionCreators(Action.user, dispatch);
    return {
        regist:actions.regist
    }
})(Register)