import { useReducer } from "react"

export const Counter=()=>{
    //define the action function. this is called when we dispatch
    const action=(state, action)=>{
        switch(action.type){
            case "increment":
                if(state.count<100)
                    return {count:state.count+1}
            case "decrement":
                if(state.count>0)
                return {count:state.count-1}
        }
        return {count:state.count}
    }
    const [state, dispatch]=useReducer(action, {count:0} );

    return <div>
        <br/>
        <button onClick={(e)=>{ dispatch({type:"decrement"}) }}>-</button>&nbsp;
        {state.count}
        &nbsp;
        <button onClick={(e)=>{dispatch({type:"increment"})}}>+</button>
    </div>
}