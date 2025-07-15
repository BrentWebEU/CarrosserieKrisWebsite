import React, { useEffect, useState } from "react";
import { Reoverlay } from "reoverlay";
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

  const SunIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );

  const StarIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

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
              {particle.type === "sun" ? (
                <SunIcon size={particle.size} />
              ) : (
                <StarIcon size={particle.size} />
              )}
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          className="summer-popup-close-button"
          onClick={handleClose}
          title="Sluiten"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className="popup-header">
          <div className="summer-icon">
            <SunIcon size={60} />
          </div>
          <h2 className="summer-popup-title">Gesloten!</h2>
        </div>

        <div className="popup-body">
          <p className="summer-popup-message">
            Wij genieten van een welverdiende zomervakantie!
          </p>

          <div className="summer-popup-dates">
            <CalendarIcon />
            <span>Van 28 juli tot en met 8 augustus</span>
          </div>

          <p className="summer-popup-contact">
            <PhoneIcon />
            <span>Voor spoedgevallen kunt u ons nog steeds bereiken</span>
          </p>

          <div className="summer-message">Geniet van de zomer!</div>
        </div>
      </div>
    </div>
  );
};

export default SummerPopup;
