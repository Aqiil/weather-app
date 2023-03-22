import './style.css';
import React, { useState, useEffect } from 'react';

import DayForecast from '../DayForecast';
import config from '../../config.js';

function FiveDayForecast() {
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    const fetchDailyData = async () => {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${config.DEFAULT_COUNTRY}&units=metric&APPID=${config.API_KEY}`);
      const data = await response.json();
      setDailyData(data.list.filter((_, index) => index % 8 === 0).slice(0, 6));
    };
    fetchDailyData();
  }, []);

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="five-day-forecast-container-wrapper">
      <p className="five-day-forecast-title">5-day Forecast</p>
      <hr />
      <div className="five-day-forecast-container">
        {dailyData &&
          dailyData.map((dayData, index) => (
            <DayForecast key={index} day={index === 0 ? 'Today' : formatDay(dayData.dt)} desc={dayData.weather[0].main.toLowerCase()} coverage={dayData.clouds.all} high={Math.round(dayData.main.temp_max)} low={Math.round(dayData.main.temp_min)}
            />
          ))}
      </div>
    </div>
  );
}

export default FiveDayForecast;