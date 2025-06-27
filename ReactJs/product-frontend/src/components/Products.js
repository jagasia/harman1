import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

export const Products=()=>{
    const [products, setProducts]=useState([]);
    const [message, setMessage]=useState('');
    useEffect(()=>{
        try{
        ProductService.fnAllProducts()
        .then(res=>{
            console.log(res.data);
            setProducts(res.data);
            setMessage('')            
        })
        .catch(err=>console.log(err)
        )
        }catch{
            setMessage("You have not logged in.");
        }
    },[])

    return <div>

{message}

        {
            !message && <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Category</th><th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p)=><tr>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.category}</td>
                        <td>{p.price}</td>
                    </tr>)
                }
            </tbody>
        </table> 
        }
    </div>
}