import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example static data
    setProducts([
      { id: 1, name: 'Laptop', price: 45000 },
      { id: 2, name: 'Headphones', price: 2500 },
    ]);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
