import "./Services.css";
import Car1 from "../../assets/img/20210211_115559.jpg";

import Car3 from "../../assets/img/20210528_101302.jpg";
import Car4 from "../../assets/img/20190121_172412.jpg";
import Car5 from "../../assets/img/20210526_200124.jpg";

export default function Services() {
  return (
    <section className="pb-70" id="services">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Diensten</span>
          <h2>Onze diensten</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <a href="#">
              <div className="service-item">
                <div className="service-img">
                  <img src={Car1} alt="Service" />
                </div>
                <div className="service-content">
                  <i className="bx bxs-car-mechanic"></i>
                  <i className="bx bxs-car-mechanic service-icon"></i>
                  <h3>Herstellen autoschades</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#">
              <div className="service-item">
                <div className="service-img">
                  <img src={Car3} alt="Service" />
                </div>
                <div className="service-content">
                  <i className="bx bxs-spray-can"></i>
                  <i className="bx bxs-spray-can service-icon"></i>
                  <h3>Spuiten brommers, poorten, afvoerbuizen enz.</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#">
              <div className="service-item">
                <div className="service-img">
                  <img src={Car4} alt="Service" />
                </div>
                <div className="service-content">
                  <i className="bx bxs-car"></i>
                  <i className="bx bxs-car service-icon"></i>
                  <h3>Spuiten van wagens</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-4">
            <a href="#">
              <div className="service-item">
                <div className="service-img">
                  <img src={Car5} alt="Service" />
                </div>
                <div className="service-content">
                  <i className="bx bxs-car-crash"></i>
                  <i className="bx bxs-car-crash service-icon"></i>
                  <h3>Herstellen van racewagens</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
