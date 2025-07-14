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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_APIKEY;
        const response = await fetch(
          "https://carrosseriekris.runasp.net/api/Popup",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              apiKey: apiKey,
            },
          }
        );

        // assign Data
        const data = await response.json();
        const arrayData = Object.values(data);
        // Show preloader

        // Popup
        if (arrayData[0].isActive && arrayData[0]) {
          withReactContent(Swal).fire({
            title: arrayData[0].title,
            color: "#212121",
            text: arrayData[0].description,
            confirmButtonColor: "#f22a2a",
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
