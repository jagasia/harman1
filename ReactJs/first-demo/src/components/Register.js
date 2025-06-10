import { useState } from "react";

export const Register=()=>{

    const [user, setUser]=useState({username:'', password:'', cpassword:'', email:'',dateOfBirth:'',phone:''});
    const [errors, setErrors]=useState({username:'', password:'', cpassword:'', email:'',dateOfBirth:'',phone:''});

    function fnValidateUsername(username){
        if(username.length<6){
            setErrors({...errors, username:'Username must be atleast 6 characters'})
        }else{
            setErrors({...errors, username:''})
        }
    }

    return <div>
    <form className="container">        
        <br/>
        Username: <input type="text" className={`form-control ${errors.username && 'is-invalid'}`} onChange={(e)=>{ setUser({...user,username:e.target.value}); fnValidateUsername(e.target.value) }} />
        {  true && <div className="text-danger">{errors.username}</div>  }
        Password: <input type="password" className="form-control" onChange={(e)=>setUser({...user,password:e.target.value})} />
        Confirm Password: <input type="password" className="form-control" onChange={(e)=>setUser({...user,cpassword:e.target.value})} />
        Email: <input type="email" className="form-control" onChange={(e)=>setUser({...user,email:e.target.value})} />
        Date of Birth: <input type="date" className="form-control" onChange={(e)=>setUser({...user,dateOfBirth:e.target.value})} />
        Phone number: <input type="number" className="form-control" onChange={(e)=>setUser({...user,phone:e.target.value})} />
        <br/>    
        {      JSON.stringify(errors) }
    </form>        
    </div>
}