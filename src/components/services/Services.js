import "./Services.css";
import Car1 from "../../assets/img/20210211_115559.jpg";

import Car3 from "../../assets/img/20210528_101302.jpg";
import Car4 from "../../assets/img/20190121_172412.jpg";
import Car5 from "../../assets/img/20210526_200124.jpg";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Herstellen autoschades",
      description:
        "Professionele herstelling van alle soorten autoschades met de nieuwste technieken en materialen.",
      image: Car1,
      icon: "bx bxs-car-mechanic",
      alt: "Auto schade herstelling",
    },
    {
      id: 2,
      title: "Spuiten brommers, poorten, afvoerbuizen",
      description:
        "Vakkundige spuitwerk voor diverse objecten buiten auto's, zoals brommers en metalen constructies.",
      image: Car3,
      icon: "bx bxs-spray-can",
      alt: "Spuitwerk diensten",
    },
    {
      id: 3,
      title: "Spuiten van wagens",
      description:
        "Complete lakbehandelingen en spuitwerk voor personen- en bedrijfswagens.",
      image: Car4,
      icon: "bx bxs-car",
      alt: "Auto spuitwerk",
    },
    {
      id: 4,
      title: "Herstellen van racewagens",
      description:
        "Gespecialiseerde reparaties en onderhoud voor racewagens en sportvoertuigen.",
      image: Car5,
      icon: "bx bxs-car-crash",
      alt: "Racewagen reparatie",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        <div className="section-title">
          <span className="sub-title">Diensten</span>
          <h2>Onze specialiteiten</h2>
          <p>
            Wij bieden een breed scala aan professionele carrosseriediensten met
            jarenlange ervaring en de nieuwste technieken.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                />
                <div className="service-image-overlay">
                  <i className={`${service.icon} service-icon-large`}></i>
                </div>
              </div>

              <div className="service-content">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <button
                  className="service-link"
                  onClick={() => {
                    // Scroll to contact section
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  aria-label={`Meer informatie over ${service.title}`}
                >
                  Meer info
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
