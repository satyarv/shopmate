import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      background: "#333", 
      padding: "1rem", 
      color: "white", 
      display: "flex", 
      justifyContent: "space-between" 
    }}>
      <h2>Shopmate 🛒</h2>
      <div>
        <Link to="/" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
