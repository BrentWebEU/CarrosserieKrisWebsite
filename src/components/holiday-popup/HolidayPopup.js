import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HolidayPopup.css';

const HolidayPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('holidayPopupShown');
    
    if (!popupShown) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('holidayPopupShown', 'true');
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const popupVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 50,
      rotateX: -15
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      y: 50,
      rotateX: 15,
      transition: { duration: 0.3 }
    }
  };

  const snowflakeVariants = {
    animate: {
      y: [0, 100],
      x: [-10, 10, -10],
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const bellVariants = {
    animate: {
      rotate: [-10, 10, -10],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="holiday-popup-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closePopup}
        >
          <motion.div
            className="holiday-popup"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background Elements */}
            <div className="holiday-bg-elements">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="snowflake"
                  variants={snowflakeVariants}
                  animate="animate"
                  style={{
                    left: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  ❄️
                </motion.div>
              ))}
            </div>

            {/* Close Button */}
            <motion.button
              className="holiday-close-btn"
              onClick={closePopup}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* Header with animated bell */}
            <motion.div className="holiday-header">
              <motion.div
                className="holiday-bell"
                variants={bellVariants}
                animate="animate"
              >
                🔔
              </motion.div>
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Feestdagen 2024-2025
              </motion.h2>
            </motion.div>

            {/* Content */}
            <motion.div
              className="holiday-content"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="holiday-icon">🎄</div>
              
              <p className="holiday-message">
                <strong>Wij zijn gesloten van vrijdag 20/12/2024 tot woensdag 1/1/2025.</strong>
              </p>
              
              <p className="holiday-submessage">
                Wij wensen u en uw familie prettige feestdagen en een gelukkig nieuwjaar!
              </p>

              <div className="holiday-note">
                <p>
                  <strong>Let op:</strong> Op vrijdag 20/12/2024 houden wij onze jaarlijkse 
                  stocktelling en zijn wij dus ook reeds gesloten.
                </p>
                <p>Wij danken u voor uw begrip.</p>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="holiday-footer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="holiday-contact">
                <p>Voor dringende zaken:</p>
                <a href="tel:+32497284662" className="holiday-phone">
                  📞 +32 497 28 46 62
                </a>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="holiday-decorations">
              <span className="decoration decoration-1">🎁</span>
              <span className="decoration decoration-2">⭐</span>
              <span className="decoration decoration-3">🎅</span>
              <span className="decoration decoration-4">🦌</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HolidayPopup;