import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.scss";
import Header from "../../Container/Header/Header";
import { slides } from "../../Constants/hero";

function Hero() {
  return (
    <div className="hero">
           <Swiper
        modules={[Autoplay, Pagination, Keyboard]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <video autoPlay muted loop className="hero-video">
                <source src={slide.video} type="video/mp4" />
              </video>
              <div className="overlay">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
