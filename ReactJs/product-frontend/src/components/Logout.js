import { useEffect } from "react";

export const Logout=()=>{
    useEffect(()=>{
        localStorage.clear();
    },[])
    return <div>
        Logged out...
    </div>
}