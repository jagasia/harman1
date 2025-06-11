import { Component } from "react";

 class Login extends Component{
    

    constructor(props){
        super(props);
        this.state={username:'', password:'', result:'', touched:false, showPassword:false};
        this.fnLogin=this.fnLogin.bind(this);
        this.fn1=this.fn1.bind(this)
    }

    fn1(){
        this.props.onLogin(this.state.username, this.state.password);
    }

    fnLogin(){
        this.setState({touched:true})
        var username=this.state.username;
        var password=this.state.password;
        if(username===password && username!='' && password!=''){
            this.setState({result:true})
        }else{
            this.setState({result:false})
        }
    }



    render(){
        return <div>
            { JSON.stringify(this.state) }
            <h3>{this.props.title}</h3>
            Username: <input id="txtUsername" type="text" className="form-control" onChange={(e)=>this.setState({username:e.target.value})} />
            Password: <input id="txtPassword" type={(this.state.showPassword)?'text':'password'} className="form-control" onChange={(e)=>this.setState({password:e.target.value})} /><br/>
            <label htmlFor="chkShowPassword">Show Password:</label> <input id="chkShowPassword" type="checkbox" onChange={(e)=>this.setState({showPassword:e.target.checked})} /><br/><br/>            
            <input type="button" value="Login" className="btn btn-success" onClick={this.fn1} />&nbsp;
            <input type="reset" value="Reset" className="btn btn-warning" /><br/>
            {/* {this.state.result} */}
            {
                this.state.result && <div style={{'color':'green'}}>Success</div>
            }

            {
                this.state.touched && !this.state.result && <div style={{'color':'red'}}>Failure</div>
            }
        </div>
    }
}

export default Login;