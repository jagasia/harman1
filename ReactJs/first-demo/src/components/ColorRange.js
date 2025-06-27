import { useState } from "react";

export const ColorRange=()=>{
    const [color, setColor]=useState({red:0, green:0, blue:0});
    return <div>
        {JSON.stringify(color)}
    <br/>        
        Red:    <input type="range" min={0} max={255} onChange={(e)=>setColor({...color,'red':e.target.value})} /><br/>
        Green:  <input type="range" min="0" max="255" onChange={(e)=>setColor({...color,'green':e.target.value})} /><br/>
        Blue:   <input type="range" min={0} max={255} onChange={(e)=>setColor({...color,'blue':e.target.value})} /><br/>
        <div style={{'backgroundColor':`rgb(${color.red},${color.green},${color.blue})`}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> 
        </div>
        
    </div>
}