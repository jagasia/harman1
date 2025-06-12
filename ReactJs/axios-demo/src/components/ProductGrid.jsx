import { useEffect, useState } from "react";
import ProductService from "./services/ProductService";

export const ProductGrid=()=>{
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        //call the api using service
        ProductService.fnRetrieveAllProducts()
        .then(response=>{
            console.log("Response received from api:");            
            console.log(JSON.stringify(response.data.products));            
            setProducts(response.data.products);
        })
        .catch(error=>{
            console.log("Error while accessing api...."+error);            
        })
    },[]);
    return <div>
        Product here...
        {
            products.map((p)=><li>{p.id}</li>)
        }
    </div>
}