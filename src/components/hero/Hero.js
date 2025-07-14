import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BuildingImage from "../../assets/img/gebouw.jpg";
import Logo from "../../assets/img/logo.svg";
import "./Hero.css";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
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
      {/* Background with building image */}
      <motion.div className="hero-background" style={{ y: backgroundY }}>
        <div className="hero-image-container">
          <img
            src={BuildingImage}
            alt="Carrosserie Kris Building"
            className="hero-building-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Decorative elements */}
        <div className="hero-decorative-elements">
          <motion.div
            className="floating-element element-1"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="floating-element element-2"
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="floating-element element-3"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Logo */}
      <motion.div
        className="hero-logo"
        style={{
          y: logoY,
          x: mousePosition.x * 0.5,
          y: logoY.get() + mousePosition.y * 0.3,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={Logo}
          alt="Carrosserie Kris Logo"
          className="logo-image"
          whileHover={{
            scale: 1.05,
            filter: "drop-shadow(0 10px 30px rgba(242, 42, 42, 0.3))",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="hero-content"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="hero-content-wrapper">
          <motion.div
            className="hero-text-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="title-line-1">Welkom bij</span>
              <span className="title-line-2">
                <span className="title-main">Carrosserie</span>
                <span className="title-accent">Kris</span>
              </span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Uw betrouwbare partner voor professionele carrosseriewerk. Gelegen
              op een toplocatie tussen Nijlen en Herentals, bieden wij
              kwaliteitsservice voor jong en oud.
            </motion.p>

            <motion.div
              className="hero-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="feature-item">
                <i className="bx bx-check-circle"></i>
                <span>Eurogarant erkend</span>
              </div>
              <div className="feature-item">
                <i className="bx bx-check-circle"></i>
                <span>Moderne faciliteiten</span>
              </div>
              <div className="feature-item">
                <i className="bx bx-check-circle"></i>
                <span>Vervangwagen service</span>
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
                  <span className="btn-text">
                    <span className="btn-label">Bel direct</span>
                    <span className="btn-number">+32 497 28 46 62</span>
                  </span>
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

          <motion.div
            className="hero-info-cards"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="info-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">
                <i className="bx bx-time"></i>
              </div>
              <div className="card-content">
                <h3>Openingstijden</h3>
                <p>
                  Ma-Vr: 8:00-17:00
                  <br />
                  Za: Op afspraak
                </p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">
                <i className="bx bx-shield-quarter"></i>
              </div>
              <div className="card-content">
                <h3>Kwaliteitsgarantie</h3>
                <p>
                  Eurogarant gecertificeerd
                  <br />
                  Volledige waarborg
                </p>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">
                <i className="bx bx-car"></i>
              </div>
              <div className="card-content">
                <h3>Vervangwagen</h3>
                <p>
                  Gratis bij verzekering
                  <br />
                  Beschikbaar op aanvraag
                </p>
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
        <span className="scroll-text">Scroll voor meer</span>
      </motion.div>
    </div>
  );
}
