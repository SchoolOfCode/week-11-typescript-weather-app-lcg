import React, { useState } from "react";
import { WeatherData, WeatherState } from "./types/types"; // Import the types
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [weatherState, setWeatherState] = useState<WeatherState>({
    city: "",
    weatherData: null,
    loading: false,
    error: null,
    forecastLength: 3, // Default forecast length
  });

  // Helper function to check if a string is a postcode
  const isPostcode = (str: string): boolean => {
    // Assuming a simple check where a postcode consists of only numbers
    return /^\d+$/.test(str);
  };

  const handleSearch = async (query: string) => {
    setWeatherState((prev) => ({ ...prev, loading: true }));

    let url = "";
    if (isPostcode(query)) {
      // Use the postcode API format: `zip={postcode},{country code}`
      url = `https://api.openweathermap.org/data/2.5/forecast?zip=${query}&appid=4aa3ab4f8533e6b8123b5fc3e37a7a9c&units=metric`;
    } else {
      // Use the city name API format: `q={city name}`
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4aa3ab4f8533e6b8123b5fc3e37a7a9c&units=metric`;
    }

    try {
      const response = await fetch(url);
      const data: WeatherData = await response.json(); // Use WeatherData type
      if (response.ok) {
        setWeatherState({
          city: data.city.name, // Use the city name returned from the API
          weatherData: data,
          loading: false,
          error: null,
          forecastLength: weatherState.forecastLength, // Maintain selected forecast length
        });
      } else {
        setWeatherState({
          city: query,
          weatherData: null,
          loading: false,
          error: data.message,
          forecastLength: weatherState.forecastLength, // Maintain selected forecast length
        });
      }
    } catch (error) {
      setWeatherState({
        city: query,
        weatherData: null,
        loading: false,
        error: "Failed to fetch weather data",
        forecastLength: weatherState.forecastLength, // Maintain selected forecast length
      });
    }
  };

  // Handler to update forecast length
  const handleForecastLengthChange = (length: number) => {
    setWeatherState((prevState) => ({ ...prevState, forecastLength: length }));
  };

  return (
    <div>
      <Header
        onSearch={handleSearch}
        onForecastLengthChange={handleForecastLengthChange}
      />
      <Main
        weatherData={weatherState.weatherData}
        loading={weatherState.loading}
        error={weatherState.error}
        forecastLength={weatherState.forecastLength} // Pass forecast length
        city={weatherState.city} // Pass city to Main for display
      />
      <Footer />
    </div>
  );
};

export default App;
