import React from "react";
import "./sommelierSection.css";
import sommelierImg from "../../assets/images/sommelier.jpg";
import overlayShape from "../../assets/images/Vector 6.png";

export default function SommelierSection() {
  return (
    <section className="sommelier-section">
      <div className="sommelier-container">
        <div className="sommelier-image">
          <img src={sommelierImg} alt="Sommelier" className="main-img" />
        </div>

        <div className="sommelier-overlay">
          <img src={overlayShape} alt="overlay" className="overlay-img" />
          <div className="sommelier-text">
            <h4>Sommelier Choice</h4>
            <h2>НЕ УВЕРЕНЫ В ВЫБОРЕ?<br />МЫ ГОТОВЫ ПОМОЧЬ!</h2>
            <p>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
