import React from "react";
import WeatherCard from "./WeatherCard";
import { WeatherData } from "../types/types";

interface MainProps {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const Main: React.FC<MainProps> = ({ weatherData, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      {weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <p>No weather data available</p>
      )}
    </main>
  );
};

export default Main;
