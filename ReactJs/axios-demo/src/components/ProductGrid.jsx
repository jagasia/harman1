import { useEffect, useState } from "react";
import ProductService from "./services/ProductService";

export const ProductGrid=()=>{
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        //call the api using service
        ProductService.fnRetrieveAllProducts()
        .then(response=>{
            console.log("Response received from api:");            
            console.log(response.data);
            
            console.log(JSON.stringify(response.data));            
            setProducts(response.data);
        })
        .catch(error=>{
            console.log("Error while accessing api...."+error);            
        })
    },[]);
    return <div>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Price</th>
                    {/* <th>Reviews</th><th>Thumbnail</th> */}
                </tr>
            </thead>
        <tbody>
        {
            (products ?? []).map((p, i)=><tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                {/* <td><img src={p.image} width={150} /></td> */}
            </tr>)
        }
        </tbody>
        </table>
    </div>
}