import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const WEATHER_API_KEY = process.env.REACT_APP_API_KEY_WEATHER;

  const currentWeatherURL = `https://api.weatherbit.io/v2.0/current?city=Budapest&key=${WEATHER_API_KEY}`;
  const iconURL = "https://www.weatherbit.io/static/img/icons/icon_code.png";

  const [temperature, setTemperature] = useState([]);
  const [icon, setIcon] = useState("");
  const [weatherStatus, setWeatherStatus] = useState("");

  const insertIconCode = (iconCode) => {
    return iconURL.replace("icon_code", iconCode);
  };

  useEffect(() => {
    axios.get(currentWeatherURL).then((response) => {
      setTemperature(response.data.data[0].app_temp);
      setIcon(insertIconCode(response.data.data[0].weather.icon));
      setWeatherStatus(response.data.data[0].weather.description);
    });
  }, []);

  return (
    <div id="weather-container">
      <img id="weather-left" src={icon} alt="weather-icon" />
      <div id="weather-right">
        <h5>Budapest</h5>
        <div>
          {weatherStatus}, {temperature} °C
        </div>
      </div>
    </div>
  );
}
