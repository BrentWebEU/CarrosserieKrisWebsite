import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Vervangwagen.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Logo from "../../assets/img/logo.svg";
import Shape from "../../assets/img/quality-shape.png";

import VervangwagenImg from "../../assets/img/main_background_foto.png";
import Suzuki from "../../assets/img/suzuki.png";

export default function Vervangwagen() {
  return (
    <section id="vervangwagen" className="vervangwagen-area">
      <div className="vervangwagen-img">
        <img src={Shape} alt="Shape" />
        <img src={Shape} alt="Shape" />
        <Swiper
          style={{
            "--swiper-navigation-color": "#d91900",
            "--swiper-pagination-color": "#d91900",
          }}
          speed={600}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide style={{ textAlign: "center", margin: "auto" }}>
            <img src={VervangwagenImg} alt="vervangwagen" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Suzuki} alt="vervangwagen" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="vervangwagen-content">
          <div className="section-title">
            <h2>Vervangwagens voor Onze Klanten</h2>
            <p>
              Bij ons staat uw mobiliteit centraal. Daarom kan u gebruikmaken
              van onze vervangwagens, zodat u zonder zorgen kunt blijven rijden
              wanneer uw eigen wagen bij ons in herstelling is.
              <br />
            </p>
            <p>
              Indien de herstelling van uw voertuig via de verzekering verloopt,
              stellen wij een vervangwagen volledig gratis ter beschikking. Zo
              kunt u uw dagelijkse activiteiten probleemloos voortzetten.
            </p>
            <p>
              Wanneer de schade buiten de verzekering om wordt hersteld, kunt u
              nog steeds gebruikmaken van onze vervangwagens. In dat geval
              vragen wij hiervoor een kleine vergoeding. Wilt u een vervangwagen
              reserveren? Geef dit aan bij het plannen van uw afspraak, dan
              regelen wij dit graag voor u!
            </p>
          </div>
          <img src={Logo} alt="vervangwagen" />
        </div>
      </div>
    </section>
  );
}
