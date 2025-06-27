import { useEffect, useState } from "react";
import ProductService from "./services/ProductService";

export const ProductForm=({id})=>{
    const [product, setProduct]=useState({id:0, name:'', price:0})
    const [productId, setProductId]=useState(id);
    useEffect(()=>{
        // alert("Updating  id as "+props.id)
        setProductId(id);
        //call api and get product details

        if(id>0){
            ProductService.fnFindProductById(id)
        .then((response)=>{
            console.log("Found product is");
            console.log(response.data);   
            setProduct(response.data);         
        })
        .catch(err=>console.log("")
        )
        }
        
    },[id])

    useEffect(()=>{
        //populate
    },[product])

    function fnAdd(){
        // alert(JSON.stringify(product))
        console.log("Adding:");        
        console.log(product);        
        ProductService.fnAddProduct(product)
        .then(response=>{
            console.log(response.data);           
            window.location.reload();
        })
        .catch(error=>{
            console.log(error);            
        })
    }    
    function fnUpdate(){
        console.log("Updating:");        
        console.log(product);    
        ProductService.fnUpdateProduct(product)
        .then(response=>{
            console.log(response.data);            
        })
        .catch(err=>console.log(err)
        )
    }
    function fnDelete(){
        console.log("Deleting:");        
        console.log(product.id);
        ProductService.fnDeleteProduct(product.id)
        .then((response)=>{
            console.log("response after delete:");
            console.log(response.data);            
        })
        .catch(err=>console.log(err)
        )    
    }


    return <div>
        <br/>
        Id: <input type="number" className="form-control" onChange={(e)=>setProduct({...product, id:e.target.value})} value={product.id} />
        Name: <input type="text" className="form-control" onChange={(e)=>setProduct({...product, name:e.target.value})} value={product.name} />
        Price: <input type="number" className="form-control" onChange={(e)=>setProduct({...product, price:e.target.value})} value={product.price} />
        <br/>
        <input type="button" value="Add" className="btn btn-info" onClick={fnAdd} />&nbsp;
        <input type="button" value="Update" className="btn btn-warning" onClick={fnUpdate} />&nbsp;
        <input type="button" value="Delete" className="btn btn-danger" onClick={fnDelete} />
    <br/>
    </div>
}