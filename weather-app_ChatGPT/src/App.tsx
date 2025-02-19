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
      url = `https://api.openweathermap.org/data/2.5/weather?zip=${query}&appid=4aa3ab4f8533e6b8123b5fc3e37a7a9c&units=metric`;
    } else {
      // Use the city name API format: `q={city name}`
      url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=4aa3ab4f8533e6b8123b5fc3e37a7a9c&units=metric`;
    }

    try {
      const response = await fetch(url);
      const data: WeatherData = await response.json(); // Use WeatherData type
      if (response.ok) {
        setWeatherState({
          city: query,
          weatherData: data,
          loading: false,
          error: null,
        });
      } else {
        setWeatherState({
          city: query,
          weatherData: null,
          loading: false,
          error: data.message,
        });
      }
    } catch (error) {
      setWeatherState({
        city: query,
        weatherData: null,
        loading: false,
        error: "Failed to fetch weather data",
      });
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Main
        weatherData={weatherState.weatherData}
        loading={weatherState.loading}
        error={weatherState.error}
      />
      <Footer />
    </div>
  );
};

export default App;
