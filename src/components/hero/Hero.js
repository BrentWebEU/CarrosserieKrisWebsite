import Vervangwagen from "../../assets/img/main_background_foto.png";
import { Slide } from "react-awesome-reveal";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="banner-area">
      <div className="banner-img">
        {/* <img src=Logo className="bg-logo-hero" alt="Logo" /> */}
        <div className="bg-hero-vid">
          <video autoPlay loop muted className="bg-video-hero">
            <source src="/videos/bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Slide direction="right" className="fadeIn" triggerOnce>
          <img src={Vervangwagen} alt="Vervangwagen" />
        </Slide>
      </div>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-text">
              <h1>Carrosserie Kris</h1>
              <p>Dé carrosserie voor jong en oud.</p>
              <div className="cmn-btn">
                <a className="banner-btn-right" href="tel:+3297284662">
                  <i className="bx bx-phone-call"></i>
                  +32 497 28 46 62
                </a>
              </div>
              <div className="cmn-btn">
                <a
                  className="banner-btn-right"
                  href="mailto:kris@carrosseriekris.be"
                >
                  <i className="bx bx-envelope"></i>
                  kris@carrosseriekris.be
                </a>
              </div>
              <br />
              {/* <div className="cmn-btn">
                <a
                  className="banner-btn-left"
                  href="https://booking.carrosseriekris.be/"
                  style={{ cursor: "pointer" }}
                >
                  Booking
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
