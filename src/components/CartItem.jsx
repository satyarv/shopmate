function CartItem({ item }) {
  return (
    <div style={{ margin: '1rem 0', borderBottom: '1px solid #ddd' }}>
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
    </div>
  );
}

export default CartItem;
