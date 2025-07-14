import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-area pt-100 pb-70" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-item contact-left">
              <h3>Contacteer Ons</h3>
              <ul>
                <li>
                  <i className="bx bx-location-plus"></i>
                  Herentalse Steenweg 89A, 2280 Grobbendonk
                </li>
                <li>
                  <i className="bx bx-mail-send"></i>
                  <a href="mailto:kris@carrosseriekris.be">
                    kris@carrosseriekris.be
                  </a>
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+32497284662"> +32 497 28 46 62 </a>
                </li>
                <li>
                  <i className="bx bx-network-chart"></i>
                  <a href="#"> Eurogarant 909 </a>
                </li>
                <li>
                  <i className="bx bx-file"></i>
                  <a href="#"> BE 0687.810.469 </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-item contact-right">
              <form
                id="contactForm"
                action="https://formspree.io/f/mbjwljdb"
                method="POST"
              >
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Geef een geldige naam"
                        placeholder="Naam"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Geef een geldig E-mail adres"
                        placeholder="E-mail"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required
                        data-error="Geef een geldig telefoon nummer"
                        className="form-control"
                        placeholder="Telefoon nummer"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        required
                        data-error="Geef een geldig onderwerp"
                        placeholder="Onderwerp"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="msg"
                        className="form-control"
                        id="msg"
                        cols="30"
                        rows="8"
                        required
                        data-error="Schrijf je bericht"
                        placeholder="Bericht"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-12">
                    <button type="submit" className="contact-btn btn">
                      Verzend
                    </button>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
              <div id="status"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
