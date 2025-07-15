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
