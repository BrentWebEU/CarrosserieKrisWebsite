import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/boxicons.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "animate.css/animate.min.css";
import "./assets/js/custom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
