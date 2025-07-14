import "./About.css";
import KrisKatrien from "../../assets/img/KrisKatrien.jpg";

export default function About() {
  return (
    <section id="about" className="quality-area pt-100">
      <div className="section-title">
        <span className="sub-title">Over ons</span>
        <h2>Over ons</h2>
      </div>
      <div className="container-fluid p-0">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 p-0" style={{ textAlign: "center" }}>
            <div className="quality-img">
              <div className="quality-img-container">
                <img src={KrisKatrien} alt="Kadett" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="quality-content">
              <div className="section-title">
                <p>
                  Carrosserie Kris werd in 2018 opgericht door Kris
                  Schoenmakers. Kris stampte de carrosserie uit het niets uit de
                  grond. Een grote sprong maar één die hij zich nog geen moment
                  beklaagde. Sinds 2020 is ook zijn vrouw Katrien mee werkzaam
                  in de carrosserie. Zij houdt zich voornamelijk bezig met de
                  boekhouding en administratie.
                </p>
                <p>
                  Begin 2023 kwam er een grondige metamorfose van de
                  carrosserie. Ze verhuisde van de achterkant van een voormalige
                  garage naar de voorkant van een modern bedrijvencomplex.
                  Carrosserie Kris is gelegen op een unieke locatie op 3 minuten
                  van afrit 20 van de E313 tussen Nijlen en Herentals.
                </p>
                <p>
                  Het bedrijvencomplex beschikt over een ruime parking met
                  laadpalen. In augustus 2023 behaalde de carrosserie het
                  Eurogarant kwaliteitslabel. Ook werd er aangesloten bij het
                  commerciële netwerk Go Smart en ARN.
                </p>
                <p>
                  Door het continu bijscholen van de medewerkers kan u ook met
                  een gerust hart uw elektrische of hybride wagen bij
                  Carrosserie Kris laten herstellen. Klantvriendelijkheid,
                  passie en de nodige portie ambitie zijn de kernwaarden van
                  Carrosserie Kris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
