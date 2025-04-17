import React, { useState } from "react";
import axios from "axios";

import "./WeatherApp.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function showWeather(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="div-form">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>

      {weatherData && (
        <ul>
          <li>Temperature: {Math.round(weatherData.temperature)}°C </li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {Math.round(weatherData.wind)} km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather icon"
            />
          </li>
        </ul>
      )}
    </div>
  );
  function handleSubmit(event) {
    event.preventDefault();
    let key = "3a94f3778290bfeee61278505dbbe51d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showWeather);
  }
}
