import React from "react";
import "./Vervangwagen.css";
import Suzuki from "../../assets/img/suzuki.png";
import Kadett from "../../assets/img/kadett.png";
import MainCar from "../../assets/img/main_background_foto.png";

export default function Vervangwagen() {
  const cars = [
    {
      image: MainCar,
      name: "Moderne Vervangwagen",
    },
    {
      image: Suzuki,
      name: "Suzuki",
    },
    {
      image: Kadett,
      name: "Kadett",
    },
  ];

  return (
    <section id="vervangwagen" className="vervangwagen-section">
      <div className="vervangwagen-container">
        <h2 className="vervangwagen-title">Vervangwagens</h2>
        <div className="cars-grid">
          {cars.map((car, index) => (
            <div key={index} className="car-card">
              <img src={car.image} alt={car.name} />
              <div className="car-name">{car.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
