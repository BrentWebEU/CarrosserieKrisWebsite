import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCog,
  faTools,
  faFileAlt,
  faCar,
  faBolt,
  faLeaf,
  faAward,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import EurogarantLogo from "../../assets/img/LogoEurogarant.png";
import "./Eurogarant.css";

export default function Eurogarant() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const guarantees = [
    {
      icon: faShieldAlt,
      title: "Kwaliteitsgarantie",
      description: "Gewaarborgd door officieel garantiebewijs",
      color: "#f22a2a",
    },
    {
      icon: faCog,
      title: "Europese Normen",
      description: "Uitrusting beantwoordt aan alle EU-standaarden",
      color: "#ff4757",
    },
    {
      icon: faTools,
      title: "Originele Onderdelen",
      description:
        "Gebruik van originele wisselstukken en fabricantrichtlijnen",
      color: "#f22a2a",
    },
    {
      icon: faFileAlt,
      title: "Geïnformatiseerd Bestek",
      description: "Digitale documentatie van alle werkzaamheden",
      color: "#ff4757",
    },
    {
      icon: faCar,
      title: "Vervangwagen",
      description: "Mobiel blijven tijdens herstelwerkzaamheden",
      color: "#f22a2a",
    },
  ];

  const eMobilityFeatures = [
    "Gecertificeerd voor hybride voertuigen",
    "Expertise in elektrische auto's",
    "Hoogvoltage systemen",
    "Batterij diagnostiek",
    "Laadinfrastructuur kennis",
    "Veiligheidsprotocollen HEV",
  ];

  return (
    <section id="eurogarant" className="eurogarant-section" ref={ref}>
      <div className="eurogarant-container">
        {/* Section Header */}
        <motion.div
          className="eurogarant-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="eurogarant-subtitle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kwaliteitslabel
          </motion.span>
          <motion.h2
            className="eurogarant-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Eurogarant Gecertificeerd
          </motion.h2>
          <motion.p
            className="eurogarant-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Trotse houders van het Eurogarant kwaliteitslabel - uw garantie voor
            vakmanschap
          </motion.p>
        </motion.div>

        <div className="eurogarant-content">
          {/* Content Section */}
          <motion.div
            className="eurogarant-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Main Description */}
            <motion.div
              className="main-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p className="intro-text">
                Wij zijn de trotse houders van het Eurogarant label. Dit
                kwaliteitsmerk staat garant voor vakmanschap en betrouwbaarheid
                in de carrosseriebranche.
              </p>
            </motion.div>

            {/* Guarantees Grid */}
            <div className="guarantees-grid">
              <h3 className="guarantees-title">Eurogarant verzekert:</h3>
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  className="guarantee-card"
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
                    className="guarantee-icon"
                    style={{ color: guarantee.color }}
                  >
                    <FontAwesomeIcon icon={guarantee.icon} />
                  </div>
                  <div className="guarantee-content">
                    <h4 className="guarantee-title">{guarantee.title}</h4>
                    <p className="guarantee-description">
                      {guarantee.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quality Badge */}
            <motion.div
              className="quality-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <FontAwesomeIcon icon={faAward} className="badge-icon" />
              <div className="badge-text">
                <h4>Kwaliteitsherkenning</h4>
                <p>
                  U kunt een kwalitatief carrosseriebedrijf herkennen aan dit
                  logo.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Logo Section */}
          <motion.div
            className="eurogarant-logo-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="logo-container">
              <motion.img
                src={EurogarantLogo}
                alt="Eurogarant Kwaliteitslabel"
                className="eurogarant-logo"
                initial={{ scale: 0.8, rotate: -5 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0.8, rotate: -5 }
                }
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              />
              <div className="logo-glow"></div>
            </div>

            {/* E-Mobility Section */}
            <motion.div
              className="emobility-section"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="emobility-header">
                <div className="emobility-icon">
                  <FontAwesomeIcon icon={faBolt} />
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h3>Eurogarant E-Mobility</h3>
                <p>Gecertificeerd voor hybride en elektrische voertuigen</p>
              </div>

              <div className="emobility-features">
                {eMobilityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="emobility-feature"
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="feature-check"
                    />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="emobility-cta"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                <h4>
                  Uw elektrische of hybride wagen is bij ons in veilige handen!
                </h4>
                <p>Vertrouw op onze expertise voor alle HEV-voertuigen.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
