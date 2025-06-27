import { useState } from "react";
import UserService from "../services/UserService";

export const Login=()=>{
        const [username, setUsername]=useState('');
        const [password, setPassword]=useState('');

        function fnLogin(){
            var user={};
            user.username=username;
            user.password=password;

            UserService.fnLogin(user)
            .then(res=>{
                console.log(res.data);
                var token=res.data;
                localStorage.setItem("token",JSON.stringify(token));
                
            })
            .catch(err=>{
                console.log(err);
                
            })
        }

    return <div>
        <h3>Login form</h3>
        Username: <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} />
        Password: <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <input type="button" value="Login" className="btn btn-info" onClick={fnLogin} />
    </div>
}