import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';
import { useParams } from 'react-router-dom';
import './Map.css'

const Weather = () => {
  const { Location } = useParams()
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '57619389d16854e87499498666de5847';

  console.log(Location)

  const weatherQuotes = [
    "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather. - John Ruskin",
    "Wherever you go, no matter what the weather, always bring your own sunshine. - Anthony J. D'Angelo",
    "Bad weather always looks worse through a window. - Tom Lehrer",
    "A perfect summer day is when the sun is shining, the breeze is blowing, the birds are singing, and the lawn mower is broken. - James Dent",
    "I like storms. They let me know that even the sky screams sometimes. - Andrea Gibson",
    "The best thing one can do when it's raining is to let it rain. - Henry wandsworth's Longfellow",
    "Rain is just confetti from the sky. - Unknown",
    "To appreciate the beauty of a snowflake it is necessary to stand out in the cold. - Aristotle",
    "Snowflakes are one of nature's most fragile things, but just look what they can do when they stick together. - Vesta M. Kelly"
  ];



  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${API_KEY}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        alert("Location not found: " + error.message)
      });
  }, [Location]);

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return <WiDaySunny size={100} />;
      case 'Clouds':
        return <WiCloudy size={100} />;
      case 'Rain':
        return <WiRain size={100} />;
      case 'Snow':
        return <WiSnow size={100} />;
      default:
        return <WiDaySunny size={100} />;
    }
  };

  return (
    <>
    
      <h1><em>Welcome</em></h1>
      <h2>Today`s Weather of {Location.toUpperCase()}</h2>
      <div className="weather-container">
        {weatherData ? (
          <div>
            <div className="weather-details">
              <div className="location">{weatherData.name}</div>
              <div className="temperature">
                {Math.round(weatherData.main.temp - 273.15)}°C
              </div>
              <div className="weather-condition">
                <div className='icon'>{getWeatherIcon(weatherData.weather[0].main)}</div>
                <span>{weatherData.weather[0].main}</span>
              </div>
            </div>
            <div className="weather-description">
              {weatherQuotes[Math.floor(Math.random() * weatherQuotes.length)]}
            </div>
            <div className='DateTo'>{(new Date()).toLocaleString()}</div>
          </div>
        ) : (
          <>
            <div>Loading...</div>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;

