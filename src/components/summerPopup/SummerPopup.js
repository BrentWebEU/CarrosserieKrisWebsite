import React from 'react';
import { Reoverlay } from 'reoverlay';
import './SummerPopup.css';

const SummerPopup = () => {
  const handleClose = (e) => {
    e.stopPropagation();
    Reoverlay.hideModal();
  };

  return (
    <div className="summer-popup-overlay">
      <div className="summer-popup-content">
        <button className="summer-popup-close-button" onClick={handleClose}>
          &times;
        </button>
        <h2 className="summer-popup-title">Gesloten!</h2>
        <p className="summer-popup-dates">
          Wij zijn met vakantie van 28/7 tot en met 8/8.
        </p>
      </div>
    </div>
  );
};

export default SummerPopup;
