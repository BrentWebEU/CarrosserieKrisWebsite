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
  const logoY = useTransform(scrollY, [0, 1000], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
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
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="floating-element element-2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      {/* Main content centered */}
      <motion.div
        className="hero-content"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="hero-content-wrapper">
          {/* Logo as main visual element */}
          <motion.div
            className="hero-logo-section"
            style={{
              y: logoY.get() + mousePosition.y * 0.2,
              x: mousePosition.x * 0.3,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="logo-container"
              whileHover={{
                scale: 1.05,
                rotate: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={Logo}
                alt="Carrosserie Kris Logo"
                className="hero-logo-image"
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="hero-text-section"
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
              <span className="title-main">Carrosserie</span>
              <span className="title-accent">Kris</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Dé carrosserie voor jong en oud. Professionele service in het hart
              van Grobbendonk.
            </motion.p>

            <motion.div
              className="hero-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="feature-item">
                <i className="bx bx-shield-quarter"></i>
                <span>Eurogarant erkend</span>
              </div>
              <div className="feature-item">
                <i className="bx bx-car"></i>
                <span>Vervangwagen service</span>
              </div>
              <div className="feature-item">
                <i className="bx bx-wrench"></i>
                <span>Moderne faciliteiten</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-contact-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="contact-buttons">
                <a href="tel:+32497284662" className="contact-btn primary-btn">
                  <i className="bx bx-phone-call"></i>
                  <span>+32 497 28 46 62</span>
                </a>

                <a
                  href="mailto:kris@carrosseriekris.be"
                  className="contact-btn secondary-btn"
                >
                  <i className="bx bx-envelope"></i>
                  <span>Email ons</span>
                </a>
              </div>

              <div className="hero-location-info">
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
        >
          <i className="bx bx-chevron-down"></i>
        </motion.div>
      </motion.div>
    </div>
  );
}
