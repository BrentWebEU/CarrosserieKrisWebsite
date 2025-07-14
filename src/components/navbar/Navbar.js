import React, { useState } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import Logo from "../../assets/img/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={"navbar-area fixed-top"}>
      <div className={"mobile-nav py-2 bg-white d-flex justify-content-end"}>
        <a href="index.html" className={"logo"}>
          <img src={Logo} width="80" alt="Carrosserie Logo" />
        </a>
        <button
          className={`navbar-toggler m-2 ${mobileMenuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={toggleMobileMenu}
        >
          {(mobileMenuOpen && <FaTimes />) || (!mobileMenuOpen && <FaBars />)}
        </button>
      </div>

      {mobileMenuOpen && (
        <ul
          className={"navbar-nav mobileToggledMenu ml-auto w-100 text-center"}
        >
          <li className={"nav-item bg-white border-bottom border-top"}>
            <a href="/" className={"nav-link active"}>
              Home
            </a>
          </li>
          <li className={"nav-item bg-white border-bottom"}>
            <a href="#erkenning" className={"nav-link"}>
              Erkenningen
            </a>
          </li>
          <li className={"nav-item bg-white border-bottom"}>
            <a href="#about" className={"nav-link"}>
              Over ons
            </a>
          </li>
          <li className={"nav-item bg-white border-bottom"}>
            <a href="#services" className={"nav-link"}>
              Diensten
            </a>
          </li>
          {/* <li className={"nav-item bg-white border-bottom"}>
            <a href="#vacatures" className={"nav-link"}>
              Vacatures
            </a>
          </li> */}
          <li className={"nav-item bg-white border-bottom"}>
            <a href="#vervangwagen" className={"nav-link"}>
              Vervangwagen
            </a>
          </li>
          <li className={"nav-item bg-white border-bottom"}>
            <a href="#eurogarant" className={"nav-link"}>
              Eurogarant
            </a>
          </li>
          <li className={"nav-item bg-white border-bottom"}>
            <a href="#contact" className={"nav-link"}>
              Contact
            </a>
          </li>
        </ul>
      )}

      <div className={"main-nav"}>
        <div className={"container"}>
          <nav className={"navbar navbar-expand-md navbar-light"}>
            <a className={"navbar-brand"} href="index.html">
              <img src={Logo} width="80" alt="Carrosserie Logo" />
            </a>
            <div
              className={`collapse navbar-collapse mean-menu ${
                mobileMenuOpen ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className={"navbar-nav ml-auto"}>
                <li className={"nav-item bg-white"}>
                  <a href="/" className={"nav-link active"}>
                    Home
                  </a>
                </li>
                <li className={"nav-item bg-white"}>
                  <a href="#erkenning" className={"nav-link"}>
                    Erkenningen
                  </a>
                </li>
                <li className={"nav-item bg-white"}>
                  <a href="#about" className={"nav-link"}>
                    Over ons
                  </a>
                </li>
                <li className={"nav-item bg-white"}>
                  <a href="#services" className={"nav-link"}>
                    Diensten
                  </a>
                </li>
                {/* <li className={"nav-item bg-white"}>
                  <a href="#vacatures" className={"nav-link"}>
                    Vacatures
                  </a>
                </li> */}
                <li className={"nav-item bg-white"}>
                  <a href="#vervangwagen" className={"nav-link"}>
                    Vervangwagen
                  </a>
                </li>
                <li className={"nav-item bg-white"}>
                  <a href="#eurogarant" className={"nav-link"}>
                    Eurogarant
                  </a>
                </li>
                <li className={"nav-item bg-white"}>
                  <a href="#contact" className={"nav-link"}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <a
                href="tel:+3297284662"
              >
                <FaPhone /> +32 497 28 46 62
              </a>
            </div> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
