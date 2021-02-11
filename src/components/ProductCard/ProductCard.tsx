import React, {useState} from "react";

// product card style
import "./ProductCard.css";

interface dataProps {
  id:number;
  image: string;
  title: string;
  price: string;
  callback: Function;
  onToggle: Function;
}
const ProductCard: React.FC<dataProps> = (data) => {
  const { image, title, price, onToggle, callback } = data;
  const [showModal, setShowModal] = useState(false);

  const onClick = (payload: any) => {
    callback(payload);
    setShowModal(true);
    if (onToggle) onToggle(showModal);
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Product" />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="button button-small" onClick={() => onClick(data)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
