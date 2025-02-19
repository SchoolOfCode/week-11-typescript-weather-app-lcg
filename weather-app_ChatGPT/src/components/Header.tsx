import React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearch: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
