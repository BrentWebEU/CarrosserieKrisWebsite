import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./Certificaten.css";
import Axalta from "../../assets/img/partners/Axalta.jpg";
import ARN from "../../assets/img/partners/ARN.png";
import GOSMART from "../../assets/img/partners/GoSmart.22d9cb65f6eac8674677-removebg-preview.png";
import Arval from "../../assets/img/partners/arval.png";

export default function Certificaten() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [activePartner, setActivePartner] = useState(null);

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
            Onze vertrouwde partners
          </motion.h2>
          <motion.p
            className="partners-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Samen werken we aan kwaliteit en innovatie in de auto-industrie
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="partners-grid"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PartnersGrid
            activePartner={activePartner}
            setActivePartner={setActivePartner}
            isInView={isInView}
          />
        </motion.div>
      </div>
    </section>
  );
}

const PartnersGrid = ({ activePartner, setActivePartner, isInView }) => {
  const partners = [
    {
      name: "Axalta",
      img: Axalta,
      title: "Axalta Coating Systems",
      description:
        "Wereldleider in coating en lakken voor de automobielindustrie. Wij gebruiken Axalta's premium producten voor superieure afwerking.",
      specialties: ["Premium lakken", "Coating technologie", "Kleurmatching"],
      website: "https://www.axalta.com",
      category: "Coatings & Lakken",
    },
    {
      name: "ARN",
      img: ARN,
      title: "Auto Recycling Nederland",
      description:
        "Duurzame auto recycling en onderdelen. ARN zorgt voor milieuvriendelijke verwerking van voertuigen en hoogwaardige vervangingsonderdelen.",
      specialties: [
        "Duurzame recycling",
        "Kwaliteitsonderdelen",
        "Milieuvriendelijk",
      ],
      website: "https://www.arn.nl",
      category: "Recycling & Onderdelen",
    },
    {
      name: "GOSMART",
      img: GOSMART,
      title: "GoSmart Mobility",
      description:
        "Innovatieve mobiliteitsoplossingen en moderne voertuigtechnologie. Partner voor slimme automotive oplossingen.",
      specialties: ["Smart mobility", "Innovatie", "Technologie"],
      website: "#",
      category: "Mobility Solutions",
    },
    {
      name: "Arval",
      img: Arval,
      title: "Arval Belgium",
      description:
        "Specialist in operational leasing en mobility solutions. Arval biedt complete fleet management oplossingen voor bedrijven.",
      specialties: [
        "Fleet management",
        "Operational leasing",
        "Mobility services",
      ],
      website: "https://www.arval.be",
      category: "Fleet Management",
    },
  ];

  return (
    <>
      <div className="partners-cards">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className={`partner-card ${activePartner === index ? "active" : ""}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1 + 0.8,
                      ease: "easeOut",
                    },
                  }
                : { opacity: 0, y: 50, scale: 0.9 }
            }
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            onClick={() =>
              setActivePartner(activePartner === index ? null : index)
            }
          >
            <div className="partner-card-inner">
              <div className="partner-image-container">
                <img
                  src={partner.img}
                  alt={partner.title}
                  className="partner-image"
                  loading="lazy"
                />
                <div className="partner-overlay">
                  <span className="partner-category">{partner.category}</span>
                </div>
              </div>

              <div className="partner-content">
                <h3 className="partner-name">{partner.title}</h3>
                <p className="partner-brief">
                  {partner.description.substring(0, 80)}...
                </p>

                <div className="partner-specialties">
                  {partner.specialties.slice(0, 2).map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>

                <button className="learn-more-btn">
                  Meer info
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Partner Modal */}
      <AnimatePresence>
        {activePartner !== null && (
          <motion.div
            className="partner-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePartner(null)}
          >
            <motion.div
              className="partner-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setActivePartner(null)}
              >
                ×
              </button>

              <div className="modal-content">
                <div className="modal-header">
                  <img
                    src={partners[activePartner].img}
                    alt={partners[activePartner].title}
                    className="modal-image"
                  />
                  <div className="modal-title-section">
                    <span className="modal-category">
                      {partners[activePartner].category}
                    </span>
                    <h3 className="modal-title">
                      {partners[activePartner].title}
                    </h3>
                  </div>
                </div>

                <div className="modal-body">
                  <p className="modal-description">
                    {partners[activePartner].description}
                  </p>

                  <div className="modal-specialties">
                    <h4>Specialiteiten:</h4>
                    <div className="specialties-grid">
                      {partners[activePartner].specialties.map(
                        (specialty, idx) => (
                          <span key={idx} className="specialty-badge">
                            {specialty}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {partners[activePartner].website !== "#" && (
                    <a
                      href={partners[activePartner].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="website-link"
                    >
                      Bezoek website →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
