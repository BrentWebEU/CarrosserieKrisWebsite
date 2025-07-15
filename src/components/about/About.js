import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";
import KrisKatrien from "../../assets/img/KrisKatrien.jpg";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const milestones = [
    {
      year: "2018",
      title: "Oprichting",
      description: "Kris Schoenmakers richtte Carrosserie Kris op",
    },
    {
      year: "2020",
      title: "Uitbreiding team",
      description: "Katrien sluit zich aan bij het bedrijf",
    },
    {
      year: "2023",
      title: "Nieuwe locatie",
      description: "Verhuizing naar modern bedrijvencomplex",
    },
    {
      year: "2023",
      title: "Eurogarant label",
      description: "Behaalde het Eurogarant kwaliteitslabel",
    },
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="about-subtitle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over ons
          </motion.span>
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ons verhaal
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="about-main">
          {/* Image Section */}
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="image-wrapper">
              <img
                src={KrisKatrien}
                alt="Kris en Katrien - Carrosserie Kris"
                className="about-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Kris & Katrien</h3>
                  <p>De drijvende krachten achter Carrosserie Kris</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="about-content-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="story-content">
              <motion.p
                className="story-paragraph"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Carrosserie Kris werd in 2018 opgericht door Kris Schoenmakers.
                Een ondernemingsavontuur dat uit het niets werd opgebouwd met
                passie en toewijding. Sinds 2020 vormt Katrien een essentieel
                onderdeel van het team.
              </motion.p>

              <motion.p
                className="story-paragraph"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                In 2023 verhuisden we naar een moderne locatie in een
                bedrijvencomplex, strategisch gelegen nabij afrit 20 van de
                E313. Met ruime parking, laadpalen en het Eurogarant
                kwaliteitslabel zijn we klaar voor de toekomst.
              </motion.p>

              <motion.div
                className="highlight-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="highlight-text">
                  <h4>Klaar voor de toekomst</h4>
                  <p>
                    Gespecialiseerd in elektrische en hybride voertuigen door
                    continue bijscholing
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="timeline-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="timeline-title">Onze mijlpalen</h3>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
                }
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
