import './style.css';
import React, { useState, useEffect } from 'react';

import DayForecast from '../DayForecast';
import config from '../../config.js';

function FiveDayForecast() {
  const [dailyData, setDailyData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${config.DEFAULT_LATITUDE}&lon=${config.DEFAULT_LONGITUDE}&exclude=minutely,alerts&units=metric&appid=${config.API_KEY}`);
      const data = await response.json();
      setDailyData(data.daily.slice(0, 5));
      setHourlyData(data.hourly);
    };
    fetchWeatherData();
  }, []);

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const findNextRainTimeAndCoverage = (dayTimestamp) => {
    if (!hourlyData) return { time: null, coverage: null };

    const dayDate = new Date(dayTimestamp * 1000);
    const nextRain = hourlyData.find(item => {
      const itemDate = new Date(item.dt * 1000);
      return itemDate.getDate() === dayDate.getDate() && item.weather[0].main === 'Rain';
    });

    if (!nextRain) return { time: null, coverage: null };

    return {
      time: new Date(nextRain.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      coverage: Math.round(nextRain.pop * 100),
    };
  };

  return (
    <div className="five-day-forecast-container-wrapper">
      <p className="five-day-forecast-title">5-day Forecast</p>
      <hr />
      <div className="five-day-forecast-container">
        {dailyData && hourlyData &&
          dailyData.map((dayData, index) => {
            const { time, coverage } = findNextRainTimeAndCoverage(dayData.dt);
            return (
              <DayForecast
                key={index}
                day={index === 0 ? 'Today' : formatDay(dayData.dt)}
                desc={dayData.weather[0].main.toLowerCase()}
                coverage={coverage}
                time={time}
                high={Math.round(dayData.temp.max)}
                low={Math.round(dayData.temp.min)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default FiveDayForecast;