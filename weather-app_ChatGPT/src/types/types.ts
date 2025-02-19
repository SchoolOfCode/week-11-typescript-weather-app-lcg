// types.ts

// Interface for each individual forecast data item in the 5-day forecast API response
export interface ForecastData {
  dt_txt: string; // Date and time of the forecasted data
  main: {
    temp: number; // Temperature in Celsius
    humidity: number; // Humidity percentage
  };
  weather: {
    description: string; // Weather description (e.g., clear sky, rain)
    icon: string; // Weather icon code (e.g., '01d', '03n')
  }[];
  wind: {
    speed: number; // Wind speed in m/s
  };
}

// Interface for the weather data response from the API (includes multiple forecast items)
export interface WeatherData {
  city: {
    name: string; // City name
  };
  list: ForecastData[]; // Array of forecast data for the next 5 days (or other length)
}

// Interface for the state in the App component
export interface WeatherState {
  city: string; // Current city name
  weatherData: WeatherData | null; // Weather data, null if not loaded or error
  loading: boolean; // Is the data currently loading?
  error: string | null; // Error message, if any
  forecastLength: number; // Length of forecast (3, 5, or 7 days)
}
