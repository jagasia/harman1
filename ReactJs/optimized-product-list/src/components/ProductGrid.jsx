import React, { useMemo } from 'react';
import { ProductItem } from './ProductItem';

export const ProductGrid = ({ products }) => {
  const sortedProducts = useMemo(() => {
    console.log("Sorting Products");
    return [...products].sort((a, b) => a.price - b.price);
  }, [products]);

  return (
    <div>
      <h3>Product List (Sorted by Price)</h3>
      {sortedProducts.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};