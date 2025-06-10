import { useState } from "react";

export const Color=()=>{
    const [color, setColor]=useState('white');

    return <div>
        {color}
        <br/>
        Choose color: <select className="form-select" onChange={(e)=>setColor(e.target.value)}>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
        </select>
        <br/>
        <div style={{'backgroundColor':color}}>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
}