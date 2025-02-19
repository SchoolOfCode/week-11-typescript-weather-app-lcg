export default function Hero({
  cityName,
  weatherTemp,
  weatherDescription,
}: {
  cityName: string;
  weatherTemp: any; // or your specific WeatherData type
}) {
  // console.log({ weatherDetails });
  return (
    <>
      <p>
        In {cityName}, it is currently {weatherTemp}°C with a {weatherDescription} kinda vibe.
        <br></br>
        
      </p>
    </>
  );
}
