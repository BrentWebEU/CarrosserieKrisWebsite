import React, { useEffect, useState } from "react";
import { Reoverlay } from "reoverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faStar,
  faCalendarAlt,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./SummerPopup.css";

const SummerPopup = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      animationDelay: Math.random() * 3,
      type: Math.random() > 0.5 ? "sun" : "star",
    }));
    setParticles(newParticles);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    Reoverlay.hideModal();
  };

  return (
    <div className="summer-popup-overlay" onClick={handleClose}>
      <div
        className="summer-popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Particles */}
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`particle ${particle.type}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                fontSize: `${particle.size}px`,
                animationDelay: `${particle.animationDelay}s`,
              }}
            >
              <FontAwesomeIcon
                icon={particle.type === "sun" ? faSun : faStar}
              />
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          className="summer-popup-close-button"
          onClick={handleClose}
          title="Sluiten"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Content */}
        <div className="popup-header">
          <div className="summer-icon">
            <FontAwesomeIcon icon={faSun} />
          </div>
          <h2 className="summer-popup-title">Gesloten!</h2>
        </div>

        <div className="popup-body">
          <p className="summer-popup-message">
            Wij genieten van een welverdiende zomervakantie!
          </p>

          <div className="summer-popup-dates">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Van 28 juli tot en met 8 augustus</span>
          </div>

          <p className="summer-popup-contact">
            <FontAwesomeIcon icon={faPhone} />
            <span>Voor spoedgevallen kunt u ons nog steeds bereiken</span>
          </p>

          <div className="summer-message">Geniet van de zomer!</div>
        </div>
      </div>
    </div>
  );
};

export default SummerPopup;
