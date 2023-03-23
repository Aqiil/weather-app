import './style.css';
import React, { useState, useEffect } from 'react';

import HourForecast from '../HourForecast';
import config from '../../config.js';

function HourlyForecast() {
  const [hourlyData, setHourlyData] = useState(null);

  useEffect(() => {
    const fetchHourlyData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${config.DEFAULT_LATITUDE}&lon=${config.DEFAULT_LONGITUDE}&exclude=current,minutely,daily,alerts&units=metric&appid=${config.API_KEY}`);
      const data = await response.json();
      setHourlyData(data.hourly.slice(0, 6));
    };
    fetchHourlyData();
  }, []);

  const formatHour = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getHours().toString().padStart(2, '0');
  };

  return (
    <div className="hourly-forecast-container-wrapper">
      <div className="hourly-forecast-container">
        <div className="severe-weather-warning-container">
          <p>No severe weather warning</p>
        </div>
        <hr />
        <div className="five-hour-forecast-container">
          {hourlyData && hourlyData.map((hourData, index) => (
              <HourForecast key={index} hour={index === 0 ? 'Now' : formatHour(hourData.dt)} desc={hourData.weather[0].main.toLowerCase()} temp={Math.round(hourData.temp)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;