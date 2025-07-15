import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Certificaten.css";
import Axalta from "../../assets/img/partners/Axalta.jpg";
import ARN from "../../assets/img/partners/ARN.png";
import GOSMART from "../../assets/img/partners/GoSmart.22d9cb65f6eac8674677-removebg-preview.png";
import Arval from "../../assets/img/partners/arval.png";
import Slider from "react-infinite-logo-slider";

export default function Certificaten() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="partners" className="partners-section" ref={ref}>
      <div className="partners-container">
        {/* Section Header */}
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="partners-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Onze partners
          </motion.h2>
        </motion.div>

        {/* Partners Slider */}
        <motion.div
          className="partners-slider-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PartnersSlider />
        </motion.div>
      </div>
    </section>
  );
}

const PartnersSlider = () => {
  const partners = [
    { name: "Axalta", img: Axalta },
    { name: "ARN", img: ARN },
    { name: "GOSMART", img: GOSMART },
    { name: "Arval", img: Arval },
  ];

  return (
    <div className="partners-slider">
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor={"#f8f9fa"}
      >
        {partners.map((partner, index) => (
          <Slider.Slide key={index} className="partner-slide">
            <div className="partner-logo-container">
              <img
                src={partner.img}
                alt={partner.name}
                className="partner-logo-image"
                loading="lazy"
              />
              <div className="partner-overlay">
                <span className="partner-logo-name">{partner.name}</span>
              </div>
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};
