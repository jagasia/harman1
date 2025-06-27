import React, { useState, useCallback } from 'react';

export const ProductForm = ({ onAdd }) => {
  const [product, setProduct] = useState({ id: '', name: '', price: '' });

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAdd = useCallback(() => {
    if (product.name && product.price) {
      onAdd({ ...product, id: Date.now() });
      setProduct({ id: '', name: '', price: '' });
    }
  }, [product, onAdd]);

  return (
    <div>
      <h3>Add Product</h3>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
      <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};