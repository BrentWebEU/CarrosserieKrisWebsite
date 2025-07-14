import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Vervangwagen from "../../assets/img/main_background_foto.png";
import "./Hero.css";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);
  const imageY = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
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
    <div className="hero-section" ref={containerRef}>
      <motion.div className="hero-background" style={{ y: backgroundY }}>
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            className="hero-background-video"
            playsInline
          >
            <source src="/videos/bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <div className="hero-geometric-bg">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
        </div>
      </motion.div>

      <motion.div
        className="hero-car-image"
        style={{
          y: imageY,
          x: mousePosition.x,
          rotateY: mousePosition.x * 0.1,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src={Vervangwagen} alt="Vervangwagen" className="car-showcase" />
      </motion.div>

      <motion.div
        className="hero-content"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="hero-text-container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="title-main">Carrosserie</span>
            <span className="title-accent">Kris</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Dé carrosserie voor jong en oud.
          </motion.p>

          <motion.div
            className="hero-contact-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a href="tel:+3297284662" className="contact-btn primary-btn">
              <i className="bx bx-phone-call"></i>
              <span>+32 497 28 46 62</span>
            </a>

            <a
              href="mailto:kris@carrosseriekris.be"
              className="contact-btn secondary-btn"
            >
              <i className="bx bx-envelope"></i>
              <span>kris@carrosseriekris.be</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="scroll-arrow">
              <i className="bx bx-chevron-down"></i>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
