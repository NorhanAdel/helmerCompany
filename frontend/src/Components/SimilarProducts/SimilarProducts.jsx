import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./SimilarProducts.scss";

function SimilarProducts({ category, currentId }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get("/api/product").then((res) => {
      const filtered = res.data.filter(
        (p) => p.category === category && p._id !== currentId
      );
      setRelated(filtered.slice(0, 4));
    });
  }, [category, currentId]);

  if (!related.length) return null;

  return (
    <div className="similar-products">
      <h2>منتجات مشابهة</h2>
      <div className="products-grid">
        {related.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
