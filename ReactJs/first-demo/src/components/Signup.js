import { useEffect, useState } from "react";

export const Signup=()=>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [valid, setValid]=useState(true);

    useEffect(()=>{
        console.log("useEffect hook is in action now...");
        
        fnValidatePasswordMatcch();
    }, [password, confirmPassword]);

    function fnValidatePasswordMatcch(){
        if(password!=confirmPassword){
            setValid(false);
        }else{
            setValid(true);
        }
    }

    return <div>
        
        Username: <input type="text" className="form-control" onChange={(e)=>{setUsername(e.target.value);}} />
        Password: <input type="text" className={`form-control ${!valid && 'is-invalid'}`} onChange={(e)=>{setPassword(e.target.value); }} />
        Confirm Password: <input type="text" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value);}} />
        <br/>
        {  !valid && <div>Passwords does not match</div> }
        <br/>
        
    </div>
}