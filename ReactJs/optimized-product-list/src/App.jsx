import { useCallback, useState } from 'react';
import { ProductForm } from './components/ProductForm';
import { ProductGrid } from './components/ProductGrid';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = useCallback((newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Optimized Product Listing</h2>
      <ProductForm onAdd={handleAddProduct} />
      <ProductGrid products={products} />
    </div>
  );
}

export default App;