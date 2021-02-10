import React, { useState } from "react";

// product card style
import "./ProductCard.css";

interface dataProps {
  image: string;
  title: string;
  price: string;
}
const ProductCard: React.FC<dataProps> = (data) => {
  const { image, title, price } = data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Product" />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="button button-small">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
