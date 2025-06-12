import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const About=()=>{
    const {color, title}=useParams();
    // const [color, setColor]=useState('white');

    useEffect(()=>{
        // setColor(color);
    },[]);

    return <div style={{'backgroundColor':color}}>
        {title||'About us'}
    </div>
}