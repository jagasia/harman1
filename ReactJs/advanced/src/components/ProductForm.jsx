import { useEffect, useReducer, useState } from "react";
import ProductService from "../services/ProductService";

export const ProductForm=()=>{

    const action=(state, dispatch)=>{
        switch(dispatch.type){
            case "add":                
                return {...state, addTrigger:true};
            case "update":                
                return {...state, updateTrigger:true};
            case "delete":                
                return state;
            case "setId":
                return {...state, id:dispatch.payload.id};
            case "setName":
                return {...state, name:dispatch.payload.name};
            case "setPrice":
                return {...state, price:dispatch.payload.price};
            case "resetTrigger":
                return { ...state, addTrigger: false, updateTrigger:false, deleteTrigger:false };
        }
    }

    function fnLoadProducts(){
        ProductService.fnAllProducts()
        .then(response=>{
            setProducts(response.data)
        })
        .catch(err=>{

        })
    }
 const [state, dispatch]=useReducer(action, {id:"0", name:"", price:"0", addTrigger:false, updateTrigger:false, deleteTrigger:false});

 const [products, setProducts]=useState([]);

    useEffect(()=>{
        if(state.addTrigger){
            ProductService.fnAddProduct(state)
                .then(response=>{
                    console.log(response.data);  
                    fnLoadProducts();
                })
                .catch(err=>{
                    console.log(err);
                    
                })           
        }else if(state.updateTrigger){
                ProductService.fnUpdateProduct(state)
                .then(response=>{
                    console.log(response.data);
                    fnLoadProducts();
                })
                .catch(err=>{
                    console.log(err);
                    
                })  
        }
        dispatch({ type: "resetTrigger" }); 
    },[state.addTrigger, state.updateTrigger])



    useEffect(()=>{
        fnLoadProducts();
    },[])

   
    return <div className="text-center">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
                Id:     <input type="number" className="form-control" onChange={(e)=>{dispatch({type:"setId",payload:{id:e.target.value}})}} />
        Name:   <input type="text" className="form-control" onChange={(e)=>{dispatch({type:"setName",payload:{name:e.target.value}})}} />
        Price:  <input type="number" className="form-control" onChange={(e)=>{dispatch({type:"setPrice",payload:{price:e.target.value}})}} />
        <br/>
        <button className="btn btn-success" onClick={(e)=>{dispatch({type:"add"})}}>Add</button>&nbsp;
        <button className="btn btn-warning" onClick={(e)=>{dispatch({type:"update"})}}>Update</button>&nbsp;
        <button className="btn btn-danger" onClick={(e)=>{dispatch({type:"delete"})}}>Delete</button><br/>
        {JSON.stringify(state)}
            </div>
            <div className="col-sm-2"></div>
        </div>
        <br/><br/><br/>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p, i)=><tr key={i}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}