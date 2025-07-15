import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaTimes } from "react-icons/fa";
import Logo from "../../assets/img/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "erkenning",
        "about",
        "services",
        "vervangwagen",
        "eurogarant",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "erkenning", label: "Erkenningen", href: "#erkenning" },
    { id: "about", label: "Over ons", href: "#about" },
    { id: "services", label: "Diensten", href: "#services" },
    { id: "vervangwagen", label: "Vervangwagen", href: "#vervangwagen" },
    { id: "eurogarant", label: "Eurogarant", href: "#eurogarant" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <a href="/" onClick={(e) => handleNavClick(e, "home")}>
            <img src={Logo} alt="Carrosserie Kris Logo" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                  <span className="nav-link-underline"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <motion.div
          className="navbar-contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="tel:+3297284662" className="contact-button">
            <FaPhone className="contact-icon" />
            <span className="contact-text">Bel nu</span>
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="hamburger-line"
            animate={{
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="hamburger-line"
            animate={{
              opacity: mobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="hamburger-line"
            animate={{
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav
              className="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-nav-header">
                <img
                  src={Logo}
                  alt="Carrosserie Kris"
                  className="mobile-logo"
                />
              </div>

              <ul className="mobile-nav-list">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="mobile-nav-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-nav-contact">
                <a href="tel:+3297284662" className="mobile-contact-btn">
                  <FaPhone /> +32 497 28 46 62
                </a>
                <a
                  href="mailto:kris@carrosseriekris.be"
                  className="mobile-contact-btn"
                >
                  Email ons
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
