import React from "react";
import "./HomeDelivery.scss";
import { FaTruck, FaCreditCard, FaBoxOpen, FaPhoneAlt } from "react-icons/fa";
import IMG from "../../Assets/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.avif";
function HomeDelivery() {
  return (
    <section className="home-delivery">
      <div className="content">
        <h2> خليك في مكانك الجبنة هتجيلك لحد باب بيتك 🚚</h2>
        <p>
          مع <strong>هيلمر</strong>، الطعم المميز بيوصل لحد عندك! اطلب منتجاتنا
          بكل سهولة، وإحنا هنوصلك في أسرع وقت وبأفضل جودة.
        </p>

        <div className="features">
          <div className="feature">
            <FaTruck />
            <span>توصيل سريع</span>
          </div>
          <div className="feature">
            <FaBoxOpen />
            <span>تغليف آمن</span>
          </div>
          <div className="feature">
            <FaCreditCard />
            <span>الدفع عند الاستلام</span>
          </div>
          <div className="feature">
            <FaPhoneAlt />
            <span>اطلب بالتليفون أو واتساب</span>
          </div>
        </div>

        <a
          href="https://wa.me/01029843501"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          اطلب دلوقتي عبر واتساب
        </a>
      </div>

      <div className="delivery_imag">
        <img src={IMG} alt="" />
      </div>
    </section>
  );
}

export default HomeDelivery;
