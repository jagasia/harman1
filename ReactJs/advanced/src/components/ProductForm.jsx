import { useReducer } from "react";

export const ProductForm=()=>{

    const action=(state, dispatch)=>{
        switch(dispatch.type){
            case "add":
                alert("Adding");
                return state;
            case "update":
                alert("Updating");
                return state;
            case "delete":
                alert("Deleting");
                return state;
        }
    }

    const [state, dispatch]=useReducer(action, {id:0, name:"", price:0});

    return <div>
        <br/>
        <button className="btn btn-success" onClick={(e)=>{dispatch({type:"add"})}}>Add</button>&nbsp;
        <button className="btn btn-warning" onClick={(e)=>{dispatch({type:"update"})}}>Update</button>&nbsp;
        <button className="btn btn-danger" onClick={(e)=>{dispatch({type:"delete"})}}>Delete</button>
    </div>
}