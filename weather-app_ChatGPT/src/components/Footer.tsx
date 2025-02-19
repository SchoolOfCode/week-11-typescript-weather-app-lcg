import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Weather App &copy; 2025</p>
      <p>Created by LCG, using React in a hurry.</p>
      <p>
        View on{" "}
        <a
          href="https://github.com/SchoolOfCode/week-11-typescript-weather-app-lcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
