import React from "react";
import { ForecastData } from "../types/types";

interface WeatherCardProps {
  weatherData: ForecastData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { main, weather, dt_txt } = weatherData;
  const weatherDescription = weather[0].description;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="weather-card">
      <h2>{dt_txt.split(" ")[0]}</h2> {/* Display date */}
      <img src={weatherIcon} alt={weatherDescription} />
      <p>{weatherDescription}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
