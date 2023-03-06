import React from "react";
import PRODUCTS from "../../products";
import Product from "./product";
import "./shop.css";

const shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Adriel Lopez Storefront</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default shop;
