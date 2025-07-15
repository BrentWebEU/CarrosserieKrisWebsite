import React, { useEffect, useState } from "react";
import { Reoverlay } from "reoverlay";
import "./SummerPopup.css";

const SummerPopup = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      animationDelay: Math.random() * 3,
      type: Math.random() > 0.5 ? "sun" : "palm",
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
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.animationDelay}s`,
              }}
            >
              {particle.type === "sun" ? "☀️" : "🌴"}
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          className="summer-popup-close-button"
          onClick={handleClose}
          title="Sluiten"
        >
          ×
        </button>

        {/* Summer decorations */}
        <div className="summer-decorations">
          <div className="decoration-top">🏖️</div>
          <div className="decoration-left">🌊</div>
          <div className="decoration-right">🍹</div>
        </div>

        {/* Content */}
        <div className="popup-header">
          <div className="summer-icon">🏝️</div>
          <h2 className="summer-popup-title">Gesloten!</h2>
        </div>

        <div className="popup-body">
          <p className="summer-popup-message">
            🌞 Wij genieten van een welverdiende zomervakantie! 🌞
          </p>

          <div className="summer-popup-dates">
            📅 Van 28 juli tot en met 8 augustus 📅
          </div>

          <p className="summer-popup-contact">
            ☎️ Voor spoedgevallen kunt u ons nog steeds bereiken ☎️
          </p>

          <div className="summer-message">Geniet van de zomer! 🌻</div>
        </div>

        {/* Beach waves animation */}
        <div className="beach-waves">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>
    </div>
  );
};

export default SummerPopup;
