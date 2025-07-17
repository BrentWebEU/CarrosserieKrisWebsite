import React from "react";
import "./Vervangwagen.css";
import Suzuki from "../../assets/img/vervangwagens/suzuki.png";
import MainCar from "../../assets/img/main_background_foto.png";
import Mercedes from "../../assets/img/vervangwagens/mercedes.png";
import FordTransit from "../../assets/img/vervangwagens/ford.png";

export default function Vervangwagen() {
  const cars = [
    {
      image: MainCar,
      name: "Renault Captur",
      available: true,
    },
    {
      image: Suzuki,
      name: "Suzuki Swift",
      available: true,
    },
    {
      image: null,
      name: "Peugeot 208",
      available: true,
    },
    {
      image: null,
      name: "Peugeot 2008",
      available: true,
    },
    {
      image: Mercedes,
      name: "Mercedes CLA",
      available: true,
    },
    {
      image: FordTransit,
      name: "Ford Transit",
      available: true,
    },
    {
      image: null,
      name: "Citroën C3",
      available: true,
    },
  ];

  return (
    <section id="vervangwagen" className="vervangwagen-section">
      <div className="vervangwagen-container">
        <h2 className="vervangwagen-title">Vervangwagens voor Onze Klanten</h2>

        <div className="vervangwagen-text-content">
          <p>
            Bij ons staat uw mobiliteit centraal. Daarom kan u gebruikmaken van
            onze vervangwagens, zodat u zonder zorgen kunt blijven rijden
            wanneer uw eigen wagen bij ons in herstelling is.
          </p>

          <p>
            Indien de herstelling van uw voertuig via de verzekering verloopt,
            stellen wij een vervangwagen volledig gratis ter beschikking. Zo
            kunt u uw dagelijkse activiteiten probleemloos voortzetten.
          </p>

          <p>
            Wanneer de schade buiten de verzekering om wordt hersteld, kunt u
            nog steeds gebruikmaken van onze vervangwagens. In dat geval vragen
            wij hiervoor een kleine vergoeding. Wilt u een vervangwagen
            reserveren? Geef dit aan bij het plannen van uw afspraak, dan
            regelen wij dit graag voor u!
          </p>
        </div>

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
                  <span>Afbeelding niet beschikbaar</span>
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
