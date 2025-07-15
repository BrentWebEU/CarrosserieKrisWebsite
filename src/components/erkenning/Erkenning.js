import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Erkenning.css";
import Baloise from "../../assets/img/erkenningen/Baloise.png";
import Belfius from "../../assets/img/erkenningen/Belfius.jpg";
import Allianz from "../../assets/img/erkenningen/Allianz.jpg";
import Dvv from "../../assets/img/erkenningen/Dvv.jpg";
import NN from "../../assets/img/erkenningen/NN.jpg";
import YUZZU from "../../assets/img/erkenningen/YUZZU.png";
import AXA from "../../assets/img/erkenningen/AXA.png";
import AG from "../../assets/img/erkenningen/AG.0290bba3ce408ce766b3-removebg-preview.png";
import KBC from "../../assets/img/erkenningen/cq5dam.web.480.9999.png";
import Vivium from "../../assets/img/erkenningen/vivium-pv.png";
import Ethias from "../../assets/img/erkenningen/Ethias.png";
import Argenta from "../../assets/img/erkenningen/Argenta.png";
import Slider from "react-infinite-logo-slider";

export default function Erkenning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="erkenning" className="erkenning-section" ref={ref}>
      <div className="erkenning-container">
        {/* Section Header */}
        <motion.div
          className="erkenning-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="erkenning-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Erkend hersteller voor
          </motion.h2>
          <motion.p
            className="erkenning-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Gecertificeerd door de meest vertrouwde verzekeringsmaatschappijen
          </motion.p>
        </motion.div>

        {/* Logos Slider */}
        <motion.div
          className="erkenning-slider-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Component />
        </motion.div>
      </div>
    </section>
  );
}
const Component = () => {
  const erkend = [
    { name: "Baloise", img: Baloise },
    { name: "Belfius", img: Belfius },
    { name: "Allianz", img: Allianz },
    { name: "DVV", img: Dvv },
    { name: "NN", img: NN },
    { name: "YUZZU", img: YUZZU },
    { name: "AXA", img: AXA },
    { name: "AG Insurance", img: AG },
    { name: "KBC", img: KBC },
    { name: "Vivium", img: Vivium },
    { name: "Ethias", img: Ethias },
    { name: "Argenta", img: Argenta },
  ];

  return (
    <div className="erkenning-slider">
      <Slider
        width="200px"
        duration={50}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor={"#f8f9fa"}
      >
        {erkend.map((item, index) => (
          <Slider.Slide key={index} className="erkenning-slide">
            <div className="logo-container">
              <img
                src={item.img}
                alt={`${item.name} - Erkend hersteller`}
                className="logo-image"
                loading="lazy"
              />
              <div className="logo-overlay">
                <span className="logo-name">{item.name}</span>
              </div>
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};
