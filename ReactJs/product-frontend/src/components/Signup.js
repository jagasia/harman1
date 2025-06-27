import { useState } from "react";
import UserService from "../services/UserService";

export const Signup=()=>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [role, setRole]=useState('');

    function fnLogin(){
        var user={};
        user.username=username;
        user.password=password;
        user.role=role;
        console.log("Sending user: ");
        console.log(user);
        
        UserService.fnSignup(user)
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
        
    }
    return <div>
        <h3>Signup form</h3>
        Username: <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} />
        Password: <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
        Roles (comma separated):<input type="text" className="form-control" onChange={(e)=>setRole(e.target.value)} /><br/>
        <input type="button" className="btn btn-info" value="Signup" onClick={fnLogin} />
    </div>
}