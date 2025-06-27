import React from 'react';

export const ProductItem = React.memo(({ product }) => {
  console.log("Rendering ProductItem:", product.name);

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 5 }}>
      <p><b>{product.name}</b></p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
});