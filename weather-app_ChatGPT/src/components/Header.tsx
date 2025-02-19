import React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearch: (city: string) => void;
  onForecastLengthChange: (length: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  onForecastLengthChange,
}) => {
  return (
    <header>
      <h1>Weather App</h1>
      <SearchBar onSearch={onSearch} />
      <label htmlFor="forecastLength">Forecast Length: </label>
      <select
        id="forecastLength"
        onChange={(e) => onForecastLengthChange(Number(e.target.value))}
      >
        <option value={3}>3 Days</option>
        <option value={5}>5 Days</option>
      </select>
    </header>
  );
};

export default Header;
