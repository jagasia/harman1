import { useEffect, useState } from "react";

export const List = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ id: 0, name: "", price: 0 });

  function fnAddProduct(e) {
    e.preventDefault(); // ⛔ Prevent page reload
    setProducts([...products, product]); // ✅ Add product
    setProduct({ id: 0, name: "", price: 0 }); // ✅ Reset form (optional)
  }

  function fnSelect(p){
    setProduct(p);
  }

  // ✅ Load products from localStorage on first render
  useEffect(() => {
    const prds = localStorage.getItem("products");
    if (prds) {
      setProducts(JSON.parse(prds));
    } else {
      const defaultProducts = [
        { id: 1, name: "Pencil", price: 10 },
        { id: 2, name: "Sharpener", price: 15 },
      ];
      setProducts(defaultProducts);
    }
  }, []);

  // ✅ Save to localStorage when products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <div>
      <form onSubmit={fnAddProduct}>
        Id:{" "}
        <input
          type="number"
          className="form-control"
          value={product.id}
          onChange={(e) =>
            setProduct({ ...product, id: parseInt(e.target.value) })
          }
        />
        Name:{" "}
        <input
          type="text"
          className="form-control"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        Price:{" "}
        <input
          type="number"
          className="form-control"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: parseFloat(e.target.value) })
          }
        />
        <br />
        <input type="submit" className="btn btn-primary" />
      </form>
      <br />
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td><input type="button" value="Select" className="btn btn-info" onClick={(e)=>{ fnSelect(p) }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
