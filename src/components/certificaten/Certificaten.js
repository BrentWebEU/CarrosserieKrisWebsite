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
            Onze partners
          </motion.h2>
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
    },
    {
      name: "ARN",
      img: ARN,
    },
    {
      name: "GOSMART",
      img: GOSMART,
    },
    {
      name: "Arval",
      img: Arval,
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
                  alt={partner.name}
                  className="partner-image"
                  loading="lazy"
                />
              </div>

              <div className="partner-content">
                <h3 className="partner-name">{partner.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
