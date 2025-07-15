import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import CarImage from "../../assets/img/hero/Hero-Background.jpg";
import Logo from "../../assets/img/logo.svg";
import "./Hero.css";

export default function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollY } = useScroll();
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax transforms (reduced for mobile)
  const contentY = useTransform(scrollY, [0, 1000], [0, isMobile ? -40 : -80]);
  const imageY = useTransform(scrollY, [0, 1000], [0, isMobile ? -20 : -40]);

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
        <div className="image-container" style={{ position: "relative" }}>
          <img
            src={CarImage}
            alt="Classic car in lobby"
            className="hero-car-image"
          />
          {/* Gradient overlay: black from left to halfway, transparent to right */}
          <div
            className="image-fade-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "10%",
              height: "100%",
              pointerEvents: "none",
              background:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        className="hero-content"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : isMobile ? 20 : 30,
        }}
        transition={{
          duration: isMobile ? 0.8 : 1,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <div className="hero-content-wrapper">
          {/* Company Name with integrated logo */}
          <motion.h1
            className="company-name"
            initial={{ opacity: 0, y: isMobile ? 15 : 20, scale: 0.95 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : isMobile ? 15 : 20,
              scale: isInView ? 1 : 0.95,
            }}
            transition={{
              duration: isMobile ? 0.6 : 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
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
            initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : isMobile ? 15 : 20,
            }}
            transition={{
              duration: isMobile ? 0.6 : 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            {/* Phone - Primary Action */}
            <motion.a
              href="tel:+32497284662"
              className="contact-primary"
              whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
              whileHover={!isMobile ? { scale: 1.02, y: -2 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="bx bx-phone"></i>
              <span className="contact-text">+32 497 28 46 62</span>
            </motion.a>

            {/* Email - Secondary Action */}
            <motion.a
              href="mailto:kris@carrosseriekris.be"
              className="contact-secondary"
              whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
              whileHover={!isMobile ? { scale: 1.02, y: -2 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="bx bx-envelope"></i>
              <span className="contact-text">kris@carrosseriekris.be</span>
            </motion.a>
          </motion.div>

          {/* Minimal extras */}
          <motion.div
            className="hero-extras"
            initial={{ opacity: 0, y: isMobile ? 10 : 0 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : isMobile ? 10 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, isMobile ? 6 : 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.9 }}
          whileHover={!isMobile ? { scale: 1.1 } : {}}
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
