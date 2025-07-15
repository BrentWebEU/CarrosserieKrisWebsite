import React from "react";
import "./Vervangwagen.css";
import VervangwagenImg from "../../assets/img/main_background_foto.png";

export default function Vervangwagen() {
  return (
    <section id="vervangwagen" className="vervangwagen-section">
      <div className="vervangwagen-container">
        <div className="vervangwagen-content">
          <div className="vervangwagen-text">
            <h2 className="vervangwagen-title">Vervangwagens</h2>
            <p className="vervangwagen-description">
              Wij bieden vervangwagens aan voor alle klanten. Voor
              verzekeringsherstel is dit gratis, voor andere herstelling tegen
              een kleine vergoeding.
            </p>
            <div className="vervangwagen-features">
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Gratis bij verzekering</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Voordelig tarief</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Direct beschikbaar</span>
              </div>
            </div>
            <a href="tel:+32497284662" className="contact-button">
              Bel voor vervangwagen
            </a>
          </div>
          <div className="vervangwagen-image">
            <img src={VervangwagenImg} alt="Vervangwagen" />
          </div>
        </div>
      </div>
    </section>
  );
}
