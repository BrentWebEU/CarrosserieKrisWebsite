import EurogarantLogo from "../../assets/img/LogoEurogarant.png";

export default function Eurogarant() {
  return (
    <section id="eurogarant" className="quality-area pt-100">
      <div className="section-title">
        <span className="sub-title">Eurogarant</span>
        <h2>Eurogarant</h2>
      </div>
      <div className="container-fluid p-0">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 p-0">
            <div className="quality-content">
              <div className="section-title">
                <p>
                  Wij zijn de trotse houders van het Eurogarant label.
                  Eurogarant verzekert:
                </p>
                <ul>
                  <li>kwaliteitswerk gewaarborgd door een garantiebewijs</li>
                  <li>dat de uitrusting beantwoordt aan de Europese normen</li>
                  <li>
                    het gebruik van originele wisselstukken en een herstelling
                    volgens de richtlijnen van de constructeur
                  </li>
                  <li>een geïnformatiseerd bestek</li>
                  <li>een vervangwagen</li>
                </ul>
                <p>
                  Kortom u kunt een kwalitatief carrosseriebedrijf herkennen aan
                  dit logo.
                </p>
                <p>
                  Wij beschikken bovendien ook over het Eurogarant E-Mobility
                  label. Dit houdt in dat wij voldoen aan alle criteria inzake
                  hybride en elektrische voertuigen, in het kort HEV. U kan dus
                  in alle vertrouwen uw hybride of elektrische wagen laten
                  herstellen bij Carrosserie Kris.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0" style={{ textAlign: "center" }}>
            <div className="quality-img">
              <img src={EurogarantLogo} alt="Kadett" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
