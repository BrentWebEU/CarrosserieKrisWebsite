import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faCalendarCheck,
  faClipboardList,
  faCar,
  faPhone,
  faShieldAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Hoe.css";

export default function Hoe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const steps = [
    {
      icon: faShieldAlt,
      title: "Verzekering contacteren",
      description:
        "Loopt het ongeval via verzekering? Licht eerst uw makelaar in en geef onze carrosserie door als 'hersteller'.",
      color: "#f22a2a",
    },
    {
      icon: faCalendarCheck,
      title: "Afspraak maken",
      description:
        "Maak bij voorkeur een afspraak voor prijsofferte/foto's via bellen of mail. Wij staan u graag te woord.",
      color: "#ff4757",
    },
    {
      icon: faClipboardList,
      title: "Schadeopname",
      description:
        "U komt langs met uw wagen op het door u gekozen tijdstip. Wij maken een schadedossier op en plannen een hersteldatum in.",
      color: "#f22a2a",
    },
    {
      icon: faCar,
      title: "Wagen brengen",
      description:
        "U brengt de wagen op de afgesproken hersteldatum. Bij voorkeur doet u dit in de voormiddag.",
      color: "#ff4757",
    },
    {
      icon: faPhone,
      title: "Klaar voor ophaling",
      description:
        "Wanneer de wagen klaar is, bellen wij u op voor de ophaling.",
      color: "#f22a2a",
    },
    {
      icon: faHandshake,
      title: "Administratie",
      description:
        "Bij verzekeringsdossiers waarvoor wij erkend hersteller zijn, regelen wij alles rechtstreeks met de verzekeraar.",
      color: "#ff4757",
    },
  ];

  return (
    <section id="schade" className="damage-section" ref={ref}>
      <div className="damage-container">
        {/* Background Elements */}
        <div className="damage-background">
          <div className="bg-pattern"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          className="damage-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="damage-subtitle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schade?
          </motion.span>
          <motion.h2
            className="damage-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Schade, wat nu?
          </motion.h2>
          <motion.p
            className="damage-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Volg deze eenvoudige stappen voor een vlotte afhandeling van uw
            autoschade
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                        ease: "easeOut",
                      },
                    }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icon" style={{ color: step.color }}>
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              <div className="step-connector"></div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="cta-content">
            <h3>Heeft u vragen over de procedure?</h3>
            <p>Neem gerust contact met ons op. Wij helpen u graag verder!</p>
          </div>
          <div className="cta-actions">
            <motion.a
              href="tel:+32497284662"
              className="cta-button cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>Bel nu</span>
            </motion.a>
            <motion.a
              href="mailto:kris@carrosseriekris.be"
              className="cta-button cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email ons</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
