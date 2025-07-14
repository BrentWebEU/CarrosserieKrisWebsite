import "./Erkenning.css";
import Baloise from "../../assets/img/erkenningen/Baloise.png";
import Belfius from "../../assets/img/erkenningen/Belfius.jpg";
import Allianz from "../../assets/img/erkenningen/Allianz.jpg";
import Dvv from "../../assets/img/erkenningen/Dvv.jpg";
import NN from "../../assets/img/erkenningen/NN.jpg";
import YUZZU from "../../assets/img/erkenningen/YUZZU.png";
import AXA from "../../assets/img/erkenningen/AXA.png";
import AG from "../../assets/img/erkenningen/AG.0290bba3ce408ce766b3-removebg-preview.png";
import KBC from "../../assets/img/erkenningen/cq5dam.web.480.9999.png";
import Vivium from "../../assets/img/erkenningen/vivium-pv.png";
import Ethias from "../../assets/img/erkenningen/Ethias.png";
import Argenta from "../../assets/img/erkenningen/Argenta.png";
import Slider from "react-infinite-logo-slider";

export default function Erkenning() {
  return (
    <section id="erkenning" className="process-area pt-100 pb-70">
      <div className="section-title">
        <h2>Erkend hersteller voor:</h2>
      </div>
      <div className="flex w-screen m-auto">
        <Component />
      </div>
    </section>
  );
}
const Component = () => {
  const erkend = [
    {
      name: "Baloise",
      img: Baloise,
    },
    {
      name: "Belfius",
      img: Belfius,
    },
    {
      name: "Allianz",
      img: Allianz,
    },
    {
      name: "Dvv",
      img: Dvv,
    },
    {
      name: "NN",
      img: NN,
    },
    {
      name: "YUZZU",
      img: YUZZU,
    },
    {
      name: "AXA",
      img: AXA,
    },
    {
      name: "AG",
      img: AG,
    },
    {
      name: "KBC",
      img: KBC,
    },
    {
      name: "Vivium",
      img: Vivium,
    },
    {
      name: "Ethias",
      img: Ethias,
    },
    {
      name: "Argenta",
      img: Argenta,
    },
  ];
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      {erkend.map((item, index) => (
        <Slider.Slide key={index} style={{ margin: "0 10px", width: "150px", display: "flex", alignItems: "center" }}>
          <img src={item.img} alt={item.name} className="w-36 mx-4" />
        </Slider.Slide>
      ))}
    </Slider>
  );
};
