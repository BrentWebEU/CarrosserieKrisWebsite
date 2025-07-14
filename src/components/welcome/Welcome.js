import Logo from "../../assets/img/logo.svg";
import "./Welcome.css";

export default function Welcome() {
  return (
    <section className="process-area pt-100 pb-70">
      <div className="section-title">
        <h2>Uw auto laten herstellen in Grobbendonk</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="process-item">
              <div className="process-inner process-one">
                <i className="bx bxs-car"></i>
                <h3>Welkom bij Carrosserie Kris</h3>
                <p>
                  U laat uw auto bij ons onder handen nemen, en wij regelen
                  alles voor jou.
                </p>
              </div>
              <div className="process-inner">
                <i className="bx bxs-group"></i>
                <h3>Wie zijn wij?</h3>
                <p>
                  We zijn een ervaren bedrijf met een team van autoliefhebbers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="process-item">
              <div className="process-img">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="process-item">
              <div className="process-inner process-two">
                <i className="bx bxs-car-crash"></i>
                <h3>Wat doen wij?</h3>
                <p></p>
                <ul>
                  <li>Autoschades</li>
                  <li>Restauratie oldtimers</li>
                  <li>Herstellen racewagens</li>
                  <li>Allerhande lakwerken</li>
                  <li>En nog zoveel meer…</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
