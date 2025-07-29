import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="product-card">
        <div className="image-container">
          {!product.inStock && <span className="out-of-stock">غير متوفر</span>}
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details">
          <h3>{product.name}</h3>
          <p className="desc">{product.description}</p>
          <div className="info">
            <span className="size">{product.size}</span>
            <span className="category">{product.category}</span>
          </div>
          <div className="price-cart">
            <span className="price">{product.price} جنيه</span>
            <button onClick={onAddToCart}>أضف للسلة</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
