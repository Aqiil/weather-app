import './style.css';
import React, { useState, useEffect } from 'react';

import HourForecast from '../HourForecast';

function HourlyForecast() {
  const [hourlyData, setHourlyData] = useState(null);

  useEffect(() => {
    const fetchHourlyData = async () => {
      const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b');
      const data = await response.json();
      setHourlyData(data.list.slice(0, 5)); // Get the first 5 hours of data
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
          {hourlyData &&
            hourlyData.map((hourData, index) => (
              <HourForecast
                key={index}
                hour={index === 0 ? 'Now' : formatHour(hourData.dt)}
                desc={hourData.weather[0].main.toLowerCase()}
                temp={Math.round(hourData.main.temp)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;