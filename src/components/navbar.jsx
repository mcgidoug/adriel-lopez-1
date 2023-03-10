import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/adriel-lopez-1">Shop</Link>
        <Link to="/adriel-lopez-1/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
