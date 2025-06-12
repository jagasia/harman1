import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Home=()=>{
    const location=useLocation();
    const [name, setName]=useState('UnKnown');

    useEffect(()=>{
        setName(location.state.name);
    },[]);

    return <>
        Welcome to Home. Welcome <span style={{'text-transform':'capitalize'}}>{name}</span>
    </>
}