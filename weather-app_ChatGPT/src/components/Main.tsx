import React from "react";
import WeatherCard from "./WeatherCard";
import { WeatherData, ForecastData } from "../types/types";

// Helper function to get the forecast at noon for each day
const getDailyForecasts = (data: WeatherData, forecastLength: number) => {
  const dailyForecasts: ForecastData[] = [];
  let lastDate = "";

  // Loop through the forecast data
  for (let i = 0; i < data.list.length; i++) {
    const forecast = data.list[i];
    const date = forecast.dt_txt.split(" ")[0]; // Get the date part (YYYY-MM-DD)
    const time = forecast.dt_txt.split(" ")[1]; // Get the time part (HH:MM:SS)

    // Only add the forecast for noon (12:00 PM) for each day
    if (time === "12:00:00" && date !== lastDate) {
      dailyForecasts.push(forecast);
      lastDate = date;
    }

    // Stop once we have the required number of days
    if (dailyForecasts.length === forecastLength) {
      break;
    }
  }

  return dailyForecasts;
};

interface MainProps {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  forecastLength: number;
  city: string;
}

const Main: React.FC<MainProps> = ({
  weatherData,
  loading,
  error,
  forecastLength,
  city,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weatherData) {
    return <p>No weather data available</p>;
  }

  // Get the forecast data for the specified length
  const dailyForecasts = getDailyForecasts(weatherData, forecastLength);

  return (
    <main>
      <div className="city-name-container">
        <h2 className="city-name">{city}</h2> {/* Show the city name here */}
      </div>
      <div className="weather-cards-container">
        {dailyForecasts.map((forecast, index) => (
          <WeatherCard key={index} weatherData={forecast} />
        ))}
      </div>
    </main>
  );
};

export default Main;
