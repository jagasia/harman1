import { useState } from "react";

export const Login=({onLogin})=>{
    const [user, setUser]=useState({username:'', password:''});
    return <div>
        Username: <input type="text" className="form-control" onChange={(e)=>setUser({...user, username:e.target.value})} />
        Password: <input type="password" className="form-control" onChange={(e)=>setUser({...user, password:e.target.value})} />
        <br/>
        <input type="button" value="Login" className="btn btn-info" onClick={(e)=>{
            onLogin(user)
        }} />
    </div>
}