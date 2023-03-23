import thunderstorm from '../../assets/icons/weather/thunderstorm.png';
import drizzle from '../../assets/icons/weather/shower_rain.png';
import rain from '../../assets/icons/weather/rain.png';
import snow from '../../assets/icons/weather/snow.png';
import clear from '../../assets/icons/weather/clear_sky.png';
import clouds from '../../assets/icons/weather/broken_clouds.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';

import './style.css';
import config from '../../config';
import React, { useState, useEffect } from 'react';

function MainPane({ onClick }) {
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-UK', options);

  const [weatherData, setWeatherData] = useState(null);

  const iconMap = {
    'Thunderstorm': thunderstorm,
    'Drizzle': drizzle,
    'Rain': rain,
    'Snow': snow,
    'Clear': clear,
    'Clouds': clouds,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${config.DEFAULT_LATITUDE}&lon=${config.DEFAULT_LONGITUDE}&exclude=minutely,alerts&units=metric&appid=${config.API_KEY}`);
      const data = await response.json();

      const nextRain = data.hourly.find(item => item.weather[0].main === 'Rain');
      const nextRainTime = nextRain ? new Date(nextRain.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;
      const rainCoverage = nextRain ? Math.round(nextRain.pop * 100) : null;

      setWeatherData({
        desc: data.current.weather[0].main,
        loc: config.DEFAULT_COUNTRY,
        temp: Math.round(data.current.temp),
        nextRainTime,
        rainCoverage,
        high: Math.round(data.daily[0].temp.max),
        low: Math.round(data.daily[0].temp.min),
      });
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Main pane container */}
      <div className="main-pane-container-wrapper" onClick={onClick}>
        <div className="main-pane-container">
          {/* Current weather condition icon */}
          <img src={iconMap[weatherData?.desc]} className="weather-icon" alt="weather condition" />

          {/* Conditional check to verify weatherData is not null */}
          {weatherData ? (
            <>
            {/* Weather info */}
            <h1>{weatherData.temp}</h1>
            <h3>{weatherData.loc}</h3>
            <h2 className='capitalize'>{weatherData.desc}</h2>
            <h3>{formattedDate}</h3>
            </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
        {/* Daily forecast pane container */}
        <hr className='main-pane-hr'/>
        <div className="main-pane-sub-container">
          <DailyRainfall coverage={weatherData?.rainCoverage} time={weatherData?.nextRainTime} />
          <DailyHL high={weatherData?.high} low={weatherData?.low} />
        </div>
      </div>
    </>
  )
}

export default MainPane;