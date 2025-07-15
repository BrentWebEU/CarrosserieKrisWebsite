import React from "react";
import "./Eurogarant.css";
import EurogarantLogo from "../../assets/img/LogoEurogarant.png";

export default function Eurogarant() {
  return (
    <section id="eurogarant" className="eurogarant-section">
      <div className="eurogarant-container">
        <div className="eurogarant-content">
          <div className="eurogarant-text">
            <h2 className="eurogarant-title">Eurogarant Gecertificeerd</h2>
            <p className="eurogarant-description">
              Wij zijn trotse houders van het Eurogarant kwaliteitslabel. Dit
              certificaat staat garant voor vakmanschap en betrouwbaarheid in de
              carrosseriebranche.
            </p>
            <div className="eurogarant-features">
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Kwaliteitsgarantie</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Europese normen</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Originele onderdelen</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Gespecialiseerd in hybride/elektrische voertuigen</span>
              </div>
            </div>
          </div>
          <div className="eurogarant-logo">
            <img src={EurogarantLogo} alt="Eurogarant Kwaliteitslabel" />
          </div>
        </div>
      </div>
    </section>
  );
}
