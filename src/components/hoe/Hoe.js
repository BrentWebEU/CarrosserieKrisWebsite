import "./Hoe.css";

export default function Hoe() {
  return (
    <div className="feature-area">
      <div className="feature-shape">
        <img src="assets/img/logo.svg" alt="Logo" width="240" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="feature-img"></div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="feature-content">
              <div className="section-title">
                <span className="sub-title">Schade?</span>
                <h2>Schade, wat nu?</h2>
              </div>
              <ul>
                <li>
                  <i>1.</i>
                  <p>
                    Loopt het ongeval via verzekering? Licht eerst uw makelaar
                    in en geef onze carrosserie door als “hersteller”.
                  </p>
                </li>
                <li>
                  <i>2.</i>
                  <p>
                    Maak bij voorkeur een afspraak voor prijsofferte/foto’s via
                    bellen of op mail. Wij staan u graag te woord.
                  </p>
                </li>
                <li>
                  <i>3.</i>
                  <p>
                    U komt langs met uw wagen op het door u gekozen tijdstip.
                    Wij maken een schadedossier op en plannen een hersteldatum
                    in.
                  </p>
                </li>
                <li>
                  <i>4.</i>
                  <p>
                    U brengt de wagen op de afgesproken hersteldatum. Bij
                    voorkeur doet u dit in de voormiddag.
                  </p>
                </li>
                <li>
                  <i>5.</i>
                  <p>Wanneer de wagen klaar is, bellen wij u op.</p>
                </li>
                <li>
                  <i>6.</i>
                  <p>
                    Indien het een verzekeringsdossier betreft waarvoor wij
                    erkend hersteller zijn, regelen wij alles rechtstreeks met
                    de verzekeraar en heeft u dus geen administratieve
                    rompslomp.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
