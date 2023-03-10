import React, { useContext } from "react";
import PRODUCTS from "../../products";
import ShopContext from "../../context/shop-context";
import CartItem from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/adriel-lopez-1")}>
            Continue Shopping
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h3>Your Cart Is Empty</h3>
      )}
    </div>
  );
};

export default Cart;
