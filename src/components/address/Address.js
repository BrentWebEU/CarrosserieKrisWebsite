import './Address.css'

export default function Address() {
  return (
    <div className="address-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="address-item">
              <i className="bx bxs-map"></i>
              <h3>Locatie</h3>
              <span>Herentalse Steenweg 89A, 2280 Grobbendonk</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="address-item">
              <i className="bx bxs-phone-call"></i>
              <h3>Bel ons</h3>
              <a href="tel:+32497284662">+32 497 28 46 62</a>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
            <div className="address-item address-one">
              <i className="bx bx-mail-send"></i>
              <h3>E-mail</h3>
              <a href="mailto:kris@carrosseriekris.be">
                kris@carrosseriekris.be
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
