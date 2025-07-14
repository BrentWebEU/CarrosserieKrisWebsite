import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Vacatures.css";

import Shape from "../../assets/img/quality-shape.png";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Vacatures() {
  return (
    <div className="vacatures">
      <Swiper
        id="vacatures"
        style={{
          "--swiper-navigation-color": "#d91900",
          "--swiper-pagination-color": "#f9f9f9",
          backgroundColor: "#000000",
        }}
        speed={600}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div slot="container-start" className="parallax-bg" style={{}}>
          <img src={Shape} alt="Shape" />
          <img src={Shape} alt="Shape" />
        </div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Dringend gezocht: Carrossier (m/v)
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Op zoek naar een nieuwe uitdaging? Aarzel dan niet om ons te
            contacteren.
            <hr />
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              U komt terecht in een snel groeiend bedrijf waar kwaliteit en
              duurzaamheid van essentieel belang zijn. Er hangt een gemoedelijke
              werksfeer en u komt terecht in een tof team van 3 carrossiers.
              Uurloon naar ervaring en extralegale voordelen.
            </p>
            <hr />
            <p>
              <strong>Contacteer ons:</strong>
            </p>
            <li>
              <a
                style={{ color: "#f22a2a" }}
                href="mailto:kris@carrosseriekris.be"
              >
                kris@carrosseriekris.be
              </a>
              <br />
              <a style={{ color: "#f22a2a" }} href="tel:+32497284662">
                0497284662
              </a>
            </li>
            <li>Herentalse Steenweg 89A 2280 Grobbendonk</li>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
