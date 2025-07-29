import React, { useState } from "react";
import "./ProductFilter.scss";

const sizes = ["200 جرام", "نص كيلو", "كيلو"];
const categories = ["موزاريلا", "شيدر", "رومي", "زبدة"];

const ProductFilter = ({ onFilter }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilter = (type, value) => {
    if (type === "size") {
      setSelectedSize(value === selectedSize ? "" : value);
      onFilter({
        size: value === selectedSize ? "" : value,
        category: selectedCategory,
      });
    } else {
      setSelectedCategory(value === selectedCategory ? "" : value);
      onFilter({
        size: selectedSize,
        category: value === selectedCategory ? "" : value,
      });
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <h4>اختر الحجم:</h4>
        {sizes.map((size) => (
          <button
            key={size}
            className={`filter-btn ${selectedSize === size ? "active" : ""}`}
            onClick={() => handleFilter("size", size)}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>اختر النوع:</h4>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleFilter("category", cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
