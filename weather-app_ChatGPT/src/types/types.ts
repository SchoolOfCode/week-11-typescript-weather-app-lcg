// types.ts

// Interface for the weather data response from the API
export interface WeatherData {
  main: {
    temp: number; // Temperature in Celsius
    humidity: number; // Humidity percentage
  };
  wind: {
    speed: number; // Wind speed in m/s
  };
  weather: {
    description: string; // Weather description (e.g., clear sky, rain)
    icon: string; // Weather icon code (e.g., '01d', '03n')
  }[];
  name: string; // City name
}

// Interface for the state in the App component
export interface WeatherState {
  city: string; // Current city name
  weatherData: WeatherData | null; // Weather data, null if not loaded or error
  loading: boolean; // Is the data currently loading?
  error: string | null; // Error message, if any
}
