import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CarImage from "../../assets/img/main_background_foto.png";
import Logo from "../../assets/img/logo.svg";
import "./Hero.css";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const contentY = useTransform(scrollY, [0, 1000], [0, -80]);
  const imageY = useTransform(scrollY, [0, 1000], [0, -40]);

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
      {/* Dark background */}
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      {/* Right side car image with fade effect */}
      <motion.div
        className="hero-image-section"
        style={{ y: imageY }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="image-container">
          <img
            src={CarImage}
            alt="Classic car in lobby"
            className="hero-car-image"
          />
          <div className="image-fade-overlay"></div>
        </div>
      </motion.div>

      {/* Main content - left side */}
      <motion.div
        className="hero-content"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="hero-content-wrapper">
          {/* Company Name with integrated logo */}
          <motion.h1
            className="company-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="name-carrosserie">
              Carr
              <span className="logo-o-container">
                <img src={Logo} alt="O" className="logo-o" />
              </span>
              sserie
            </span>
            <span className="name-kris">Kris</span>
          </motion.h1>

          {/* Contact Actions */}
          <motion.div
            className="contact-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Phone - Primary Action */}
            <a href="tel:+32497284662" className="contact-primary">
              <i className="bx bx-phone"></i>
              <span className="contact-text">+32 497 28 46 62</span>
            </a>

            {/* Email - Secondary Action */}
            <a
              href="mailto:kris@carrosseriekris.be"
              className="contact-secondary"
            >
              <i className="bx bx-envelope"></i>
              <span className="contact-text">kris@carrosseriekris.be</span>
            </a>
          </motion.div>

          {/* Minimal extras */}
          <motion.div
            className="hero-extras"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="location-simple">
              <i className="bx bx-map-pin"></i>
              <span>Grobbendonk</span>
            </div>
            <div className="quality-badge">
              <i className="bx bx-shield-quarter"></i>
              <span>Eurogarant</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const nextSection = document.getElementById("erkenning");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <i className="bx bx-chevron-down"></i>
        </motion.div>
      </motion.div>
    </div>
  );
}
