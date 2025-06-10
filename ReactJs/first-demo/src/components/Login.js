import { Component } from "react";

 class Login extends Component{
    

    constructor(props){
        super(props);
        this.state={username:'', password:'', result:''};
        this.usernameChange=this.usernameChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
    }

    usernameChange(e){
        this.setState({username:e.target.value})
    }

    passwordChange(e){
        this.setState({password:e.target.value})
    }

    render(){
        return <div>
            { JSON.stringify(this.state) }
            <h3>{this.props.title}</h3>
            Username: <input type="text" className="form-control" onChange={this.usernameChange} />
            Password: <input type="password" className="form-control" onChange={this.passwordChange} /><br/>
            <input type="button" value="Login" className="btn btn-success" />&nbsp;
            <input type="reset" value="Reset" className="btn btn-warning" /><br/>
        </div>
    }
}

export default Login;