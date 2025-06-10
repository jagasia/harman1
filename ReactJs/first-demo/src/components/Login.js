import { Component } from "react";

 class Login extends Component{
    

    constructor(props){
        super(props);
        this.state={username:'', password:'', result:'', touched:false};
        this.fnLogin=this.fnLogin.bind(this);
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
            Password: <input id="txtPassword" type="password" className="form-control" onChange={(e)=>this.setState({password:e.target.value})} /><br/>
            <input type="button" value="Login" className="btn btn-success" onClick={this.fnLogin} />&nbsp;
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