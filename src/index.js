import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import WeatherApp from "./WeatherApp";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <WeatherApp />
    <p className="footer">
      <a href="https://github.com/Nastija-Sij/my-app" target="_blank">
        Open-source code
      </a>
      , by{" "}
      <a href="https://github.com/Nastija-Sij" target="_blank">
        {" "}
        Nastija Sij
      </a>
      .
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
