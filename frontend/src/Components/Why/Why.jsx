import React from "react";
import { reasons } from "../../Constants/why";
import "./Why.scss";
function WhyHelmer() {
  return (
    <div className="why-helmer">
      <h2>ليه تختار منتجات هيلمر؟</h2>
      <div className="reasons">
        {reasons.map((item, index) => (
          <div className="reason-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyHelmer;
