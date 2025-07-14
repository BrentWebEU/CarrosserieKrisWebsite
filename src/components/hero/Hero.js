import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../../assets/img/logo.svg";
import "./Hero.css";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  const logoY = useTransform(scrollY, [0, 1000], [0, -30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 100,
          y: (e.clientY - rect.top - rect.height / 2) / 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div id="home" className="hero-section" ref={containerRef}>
      {/* Dark background with subtle patterns */}
      <div className="hero-background">
        <div className="hero-gradient-overlay"></div>

        {/* Minimal decorative elements */}
        <div className="hero-decorative-elements">
          <motion.div
            className="floating-element element-1"
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="floating-element element-2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      {/* Subtle logo as design element */}
      <motion.div
        className="hero-logo-decoration"
        style={{
          y: logoY.get() + mousePosition.y * 0.5,
          x: mousePosition.x * 0.3,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <img
          src={Logo}
          alt="Carrosserie Kris Logo"
          className="logo-decoration"
        />
      </motion.div>

      {/* Main content - text and buttons are the focus */}
      <motion.div
        className="hero-content"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="hero-content-wrapper">
          {/* Main headline - primary focus */}
          <motion.div
            className="hero-main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="title-highlight">Professionele</span>
              <span className="title-main">Carrosserie</span>
              <span className="title-accent">Service</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Uw auto verdient de beste zorg. Bij Carrosserie Kris krijgt u
              vakkundige reparaties, persoonlijke service en de zekerheid van
              Eurogarant kwaliteit.
            </motion.p>

            {/* Call-to-action buttons - secondary focus */}
            <motion.div
              className="hero-cta-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="cta-primary">
                <a href="tel:+32497284662" className="cta-btn main-cta">
                  <i className="bx bx-phone-call"></i>
                  <span className="btn-content">
                    <span className="btn-label">Direct contact</span>
                    <span className="btn-detail">+32 497 28 46 62</span>
                  </span>
                </a>
              </div>

              <div className="cta-secondary">
                <a
                  href="mailto:kris@carrosseriekris.be"
                  className="cta-btn secondary-cta"
                >
                  <i className="bx bx-envelope"></i>
                  <span>Email ons</span>
                </a>

                <button
                  className="cta-btn info-cta"
                  onClick={() => {
                    const aboutElement = document.getElementById("about");
                    if (aboutElement) {
                      aboutElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <i className="bx bx-info-circle"></i>
                  <span>Meer info</span>
                </button>
              </div>
            </motion.div>

            {/* Supporting information */}
            <motion.div
              className="hero-supporting-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="info-highlights">
                <div className="highlight-item">
                  <i className="bx bx-shield-quarter"></i>
                  <span>Eurogarant erkend</span>
                </div>
                <div className="highlight-item">
                  <i className="bx bx-car"></i>
                  <span>Gratis vervangwagen</span>
                </div>
                <div className="highlight-item">
                  <i className="bx bx-time"></i>
                  <span>Snelle service</span>
                </div>
              </div>

              <div className="location-info">
                <i className="bx bx-map"></i>
                <span>Herentalse Steenweg 89A, 2280 Grobbendonk</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const erkenningSectio = document.getElementById("erkenning");
            if (erkenningSectio) {
              erkenningSectio.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <i className="bx bx-chevron-down"></i>
        </motion.div>
      </motion.div>
    </div>
  );
}
