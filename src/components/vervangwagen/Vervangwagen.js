import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faShieldAlt,
  faHandshake,
  faCalendarCheck,
  faClock,
  faEuroSign,
  faPhone,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Vervangwagen.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import VervangwagenImg from "../../assets/img/main_background_foto.png";
import Suzuki from "../../assets/img/suzuki.png";

export default function Vervangwagen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const features = [
    {
      icon: faShieldAlt,
      title: "Gratis bij verzekering",
      description: "Vervangwagen volledig gratis bij verzekeringsherstel",
      color: "#f22a2a",
    },
    {
      icon: faEuroSign,
      title: "Voordelig tarief",
      description: "Kleine vergoeding bij herstel buiten verzekering",
      color: "#ff4757",
    },
    {
      icon: faCalendarCheck,
      title: "Eenvoudig reserveren",
      description: "Geef aan bij afspraak maken, wij regelen de rest",
      color: "#f22a2a",
    },
    {
      icon: faClock,
      title: "Direct beschikbaar",
      description: "Vervangwagen klaar bij inlevering van uw voertuig",
      color: "#ff4757",
    },
  ];

  const benefits = [
    "Mobiel blijven tijdens herstelling",
    "Dagelijkse activiteiten voortzetten",
    "Geen zorgen over vervoer",
    "Betrouwbare vervangwagens",
    "Flexibele oplossingen",
  ];

  return (
    <section id="vervangwagen" className="vervangwagen-section" ref={ref}>
      <div className="vervangwagen-container">
        {/* Section Header */}
        <motion.div
          className="vervangwagen-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="vervangwagen-subtitle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mobiel blijven
          </motion.span>
          <motion.h2
            className="vervangwagen-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Vervangwagens voor Onze Klanten
          </motion.h2>
          <motion.p
            className="vervangwagen-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Bij ons staat uw mobiliteit centraal. Blijf rijden terwijl uw wagen
            wordt hersteld.
          </motion.p>
        </motion.div>

        <div className="vervangwagen-content">
          {/* Image Section */}
          <motion.div
            className="vervangwagen-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="image-swiper-container">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#f22a2a",
                  "--swiper-pagination-color": "#f22a2a",
                }}
                speed={800}
                navigation={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                effect={"fade"}
                fadeEffect={{
                  crossFade: true,
                }}
                modules={[Navigation, Autoplay, EffectFade]}
                className="vervangwagen-swiper"
              >
                <SwiperSlide>
                  <div className="slide-image-container">
                    <img
                      src={VervangwagenImg}
                      alt="Vervangwagen - Modern voertuig"
                    />
                    <div className="slide-overlay">
                      <h3>Premium Vervangwagens</h3>
                      <p>Moderne, betrouwbare voertuigen voor uw comfort</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-image-container">
                    <img src={Suzuki} alt="Suzuki vervangwagen" />
                    <div className="slide-overlay">
                      <h3>Uitgebreid Wagenpark</h3>
                      <p>
                        Verschillende modellen beschikbaar voor elke behoefte
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="vervangwagen-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* Features Grid */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.6,
                            delay: 1.2 + index * 0.1,
                            ease: "easeOut",
                          },
                        }
                      : { opacity: 0, y: 30, scale: 0.9 }
                  }
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div
                    className="feature-icon"
                    style={{ color: feature.color }}
                  >
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <motion.div
              className="benefits-section"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h3 className="benefits-title">
                Waarom kiezen voor onze vervangwagens?
              </h3>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="benefit-icon"
                    />
                    <span className="benefit-text">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="vervangwagen-cta"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <div className="cta-content">
                <h3>Vervangwagen nodig?</h3>
                <p>
                  Geef het aan bij het maken van uw afspraak. Wij regelen het
                  voor u!
                </p>
              </div>
              <motion.a
                href="tel:+32497284662"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>Bel voor afspraak</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
