import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const navigate=useNavigate();

    function fnLogin(){
        if(username==password){
            //redirect to admin home
            navigate('/adminhome');
        }else{
            //redirect to home
            navigate('/');
        }
    }
    return <>
        Username: <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} />
        Password: <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <input type="button" value="Login" className="btn btn-info" onClick={fnLogin} />
    </>
}