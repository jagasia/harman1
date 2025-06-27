import { useState } from 'react';


export function Counter(props){
    const [no, setNo]=useState(0);

    function increase(){
        setNo(no+1)
    }

    function decrease(){
        setNo(no-1)
    }

    return <div>
        {props.heading}
        <input type="button" value="-" onClick={decrease} />&nbsp;
        {no}
        &nbsp;
        <input type="button" value="+" onClick={increase} />

    </div>
}