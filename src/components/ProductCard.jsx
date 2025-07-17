import { useState } from 'react';

function ProductCard({ product }) {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    setCart(storedCart);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
