import React from "react";
import "./About.scss";
import V from "../../Assets/video_2025-06-18_14-47-54.mp4"

function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>من نحن</h2>
          <p>
            هيلمر هي شركة رائدة في صناعة منتجات الألبان عالية الجودة، بنستخدم
            أحدث تكنولوجيا التصنيع لضمان طعم مميز وجودة مضمونة.
            <br />
            من قلب المزارع المصرية، بنقدّم لكم منتجات زي الموتزاريلا، الجبنة
            الرومي، والجبنة الشيدر بطعم لا يُقاوم 💛.
            <br />
            هدفنا نوصل لكل بيت ومنيو في مصر، ونكون اختيار ست البيت الأول.
          </p>
        </div>
        <div className="about-media">
          <video controls muted className="about-video">
            <source src={V} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
