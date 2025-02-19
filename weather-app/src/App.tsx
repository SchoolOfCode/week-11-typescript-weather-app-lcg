import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { ICityname } from "./types";

function App() {
  const [cityName, setCityName] = useState<string>("Sheffield");
  const [weatherDetails, setWeatherDetails] = useState({});

  async function handleClick(e) {
    e.preventDefault();
    const newCity = e.target.city.value;
    setCityName(newCity);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=4aa3ab4f8533e6b8123b5fc3e37a7a9c&units=metric`
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Header cityName={cityName} handleClick={handleClick} />
      <Hero cityName={cityName} />
      <Footer />
    </>
  );
}

export default App;
