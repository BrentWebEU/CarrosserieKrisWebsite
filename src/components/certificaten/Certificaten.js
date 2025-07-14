import "./Certificaten.css";
import Axalta from "../../assets/img/partners/Axalta.jpg";
import ARN from "../../assets/img/partners/ARN.png";
import GOSMART from "../../assets/img/partners/GoSmart.22d9cb65f6eac8674677-removebg-preview.png";
import Arval from "../../assets/img/partners/arval.png";
import Slider from "react-infinite-logo-slider";

export default function Certificaten() {
  return (
    <section id="erkenning" className="process-area pt-100 pb-70">
      <div className="section-title">
        <h2>Onze partners:</h2>
      </div>
      <div className="flex w-screen m-auto">
        <Component />
      </div>
    </section>
  );
}

const Component = () => {
  const partners = [
    {
      name: "Axalta",
      img: Axalta,
    },
    {
      name: "ARN",
      img: ARN,
    },
    {
      name: "GOSMART",
      img: GOSMART,
    },
    {
      name: "Arval",
      img: Arval,
    },
  ];
  return (
    <>
      {partners.map((item, index) => (
        <div key={index} className="container flex w-100 m-auto">
          <div
            className="col"
            style={{ textAlign: "center", width: "100%", margin: "auto" }}
          >
            <img src={item.img} alt={item.name} className="w-36 mx-4" />
          </div>
        </div>
      ))}
    </>
  );
};
