import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");

  function setWeather(response) {
    setText(
      <ul>
        <li>
          Country: {response.data.name}, {response.data.sys.country}
        </li>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d9838178b5b401f1b4e7cb5af18e210&units=metric`;

    axios.get(url).then(setWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="Search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div>{text}</div>
    </div>
  );
}
