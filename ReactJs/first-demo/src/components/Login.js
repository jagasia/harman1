import { Component } from "react";

 class Login extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return <div>
            <h3>{this.props.title}</h3>
            Username: <input type="text" className="form-control" />
            Password: <input type="password" className="form-control" /><br/>
            <input type="button" value="Login" className="btn btn-success" />&nbsp;
            <input type="reset" value="Reset" className="btn btn-warning" /><br/>
        </div>
    }
}

export default Login;