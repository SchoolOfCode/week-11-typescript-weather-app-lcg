import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Weather App &copy; 2025</p>
      <p>
        Created by [Your Name]. View on{" "}
        <a
          href="https://github.com/your-github-repo"
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
