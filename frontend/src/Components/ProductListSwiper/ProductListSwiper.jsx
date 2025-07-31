import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProductListSwiper.scss";
import ProductCategorySlider from "../ProductCategorySlider/ProductCategorySlider";

function ProductListSwiper() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://helmer-backend-production.up.railway.app/api/product`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = ["موزاريلا", "شيدر", "منتجات اخرى", "منتجات ايطالى"];

  return (
    <div className="product-showcase container">
      <h1>منتجاتنا</h1>
      {categories.map((cat) => {
        const filtered = products.filter((p) => p.category === cat);
        return (
          <ProductCategorySlider key={cat} title={cat} products={filtered} />
        );
      })}
    </div>
  );
}

export default ProductListSwiper;
