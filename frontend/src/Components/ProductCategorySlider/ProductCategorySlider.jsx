import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ProductCard from "../ProductCard/ProductCard";

function ProductCategorySlider({ title, products }) {
  const nextClass = `swiper-button-next-${title.replace(/\s+/g, "-")}`;
  const prevClass = `swiper-button-prev-${title.replace(/\s+/g, "-")}`;

  return (
    <div className="category-slider">
      <h2>{title}</h2>

          <div className={`custom-nav prev ${prevClass}`}></div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
        modules={[Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} onAddToCart={() => {}} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`custom-nav next ${nextClass}`}></div>
    </div>
  );
}

export default ProductCategorySlider;
