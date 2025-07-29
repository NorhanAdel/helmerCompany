import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testmonial.scss";
import { FaStar } from "react-icons/fa";
import { reviews } from "../../Constants/testmonial";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>آراء عملائنا الكرام</h2>
      <Swiper
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation,   Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={review.image} alt={review.name} />
              <h4>{review.name}</h4>
              <div className="stars">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} color="#c4981f" />
                  ))}
              </div>
              <p>{review.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
