import React, { useState, useEffect } from "react";
import About from "./components/about/About";
import Address from "./components/address/Address";
import Certificaten from "./components/certificaten/Certificaten";
import Contact from "./components/contact/Contact";
import Erkenning from "./components/erkenning/Erkenning";
import Eurogarant from "./components/eurogarant/Eurogarant";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Hoe from "./components/hoe/Hoe";
import Navbar from "./components/navbar/Navbar";
import Preloader from "./components/preloader/Preloader";
import Services from "./components/services/Services";
import Vervangwagen from "./components/vervangwagen/Vervangwagen";
import Welcome from "./components/welcome/Welcome";

import { Reoverlay as ReoverlayAPI, ModalContainer } from "reoverlay";
import SummerPopup from "./components/summerPopup/SummerPopup";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    ReoverlayAPI.showModal(SummerPopup);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <HolidayPopup />
      {isLoading && (
        <Preloader
          onLoadingComplete={handleLoadingComplete}
          loadingDuration={3000}
        />
      )}
      <Navbar />
      <Hero />
      <Address />
      <Welcome />
      <Erkenning />
      <Certificaten />
      <About />
      <Services />
      {/* <Vacatures /> */}
      <Hoe />
      <Vervangwagen />
      <Eurogarant />
      <Contact />
      <Footer />
      <ModalContainer />
    </div>
  );
}

export default App;
