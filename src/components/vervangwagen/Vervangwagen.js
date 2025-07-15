import React from "react";
import "./Vervangwagen.css";
import Suzuki from "../../assets/img/suzuki.png";
import Kadett from "../../assets/img/kadett.png";
import MainCar from "../../assets/img/main_background_foto.png";

export default function Vervangwagen() {
  const cars = [
    {
      image: MainCar,
      name: "Premium Vervangwagen",
      available: true,
    },
    {
      image: Suzuki,
      name: "Suzuki Swift",
      available: true,
    },
    {
      image: Kadett,
      name: "Opel Kadett Classic",
      available: true,
    },
    {
      image: null,
      name: "BMW 3 Series",
      available: false,
    },
    {
      image: null,
      name: "Volkswagen Golf",
      available: false,
    },
    {
      image: null,
      name: "Ford Focus",
      available: false,
    },
    {
      image: null,
      name: "Audi A3",
      available: false,
    },
  ];

  return (
    <section id="vervangwagen" className="vervangwagen-section">
      <div className="vervangwagen-container">
        <h2 className="vervangwagen-title">Onze Fantastische Vervangwagens!</h2>
        <p className="vervangwagen-subtitle">
          Blijf mobiel met onze uitgebreide vloot van kwaliteitsvoertuigen
        </p>
        <div className="cars-grid">
          {cars.map((car, index) => (
            <div
              key={index}
              className={`car-card ${!car.available ? "placeholder" : ""}`}
            >
              {car.image ? (
                <img src={car.image} alt={car.name} />
              ) : (
                <div className="placeholder-image">
                  <div className="car-icon">🚗</div>
                  <span>Binnenkort beschikbaar</span>
                </div>
              )}
              <div className="car-name">{car.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
