import { useEffect, useState } from "react";

export const List=()=>{
    // const countries=["India","Australia","Srilanka","Japan"];
        const [products, setProducts]=useState([]);
        const [product, setProduct]=useState({id:0,name:'',price:0})

        
        // localStorage.clear();
        function fnAddProduct(){
            setProducts([...products,product]);
            console.log("Added. now products is "+JSON.stringify(products));
            
            
        }

        useEffect(()=>{
            var prds= localStorage.getItem("products");
            if(prds){
                setProducts(JSON.parse(prds));
            }else{
                 setProducts([
        { id: 1, name: 'Pencil', price: 10 },
        { id: 2, name: 'Sharpener', price: 15 }
      ]);
                localStorage.setItem("products",JSON.stringify(products));

            }
        },[])

        useEffect(()=>{            
            alert("Products changes. "+JSON.stringify(products))
            localStorage.setItem("products", JSON.stringify(products));
            console.log(products.length+" products in localStorage");
            
        },[products])

    return <div>
        {/* {
            countries.map((country)=><li>{country}</li>)
        } */}
        <form onSubmit={fnAddProduct}>
            Id: <input type="number" className="form-control" onChange={(e)=>setProduct({...product, id:e.target.value})} />
            Name: <input type="text" className="form-control" onChange={(e)=>setProduct({...product, name:e.target.value})} />
            Price: <input type="number" className="form-control" onChange={(e)=>setProduct({...product, price:e.target.value})} />
            <br/>
            <input type="submit" className="btn btn-primary" />
        </form>
        <br/>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <td>Id</td><td>Name</td><td>Price</td><td></td>
                </tr>
            </thead>
            <tbody>
        {
            products.map((p, i)=><tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>Select</td>
            </tr>)
        }
        </tbody>
        </table>
    </div>
}