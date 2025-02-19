import React from "react";
import { WeatherData } from "../types/types";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { main, weather, wind, name } = weatherData;
  const weatherDescription = weather[0].description;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={weatherIcon} alt={weatherDescription} />
      <p>{weatherDescription}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
