import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {

const currentWeatherURL = "https://api.weatherbit.io/v2.0/current?city=Budapest&key=135cd6338d104bbca1d1c554b96c2085"
const iconURL = "https://www.weatherbit.io/static/img/icons/icon_code.png"  
  
const [temperature, setTemperature] = useState([]);
const [icon, setIcon] = useState("");
const [weatherStatus, setWeatherStatus] = useState("")

const insertIconCode = iconCode => {
    return iconURL.replace("icon_code", iconCode)
}

useEffect(() => {
axios.get(currentWeatherURL)
.then((response) => {
    setTemperature(response.data.data[0].app_temp);  
    setIcon(insertIconCode(response.data.data[0].weather.icon));
    setWeatherStatus(response.data.data[0].weather.description);
    });
}, []);


return (
    <div>
        <img width="15%" src={icon} alt="icon"/>
        <span>{weatherStatus},  </span>
        <span>{temperature}  °C</span>
    </div>  
  )
}
