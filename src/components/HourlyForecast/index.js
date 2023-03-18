import './style.css';
import React, { useState, useEffect } from 'react';

import FiveHourForecast from '../FiveHourForecast';
import HourForecast from '../HourForecast';

function HourlyForecast() {
    const [hourlyData, setHourlyData] = useState(null);
  
    useEffect(() => {
      const fetchHourlyData = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b');
        const data = await response.json();
        setHourlyData(data.list.slice(0, 24)); // Get the first 24 hours of data
      };
      fetchHourlyData();
    }, []);
  
    return (
      <div className="hourly-forecast-container-wrapper">
        <div className="hourly-forecast-container">
          <div className="severe-weather-warning-container">
            <p>No severe weather warning</p>
          </div>
          <hr />
          <div className="five-hour-forecast-container">
            <HourForecast hour="Now" desc="clouds" temp="14" />
            <HourForecast hour="13" desc="clear" temp="14" />
            <HourForecast hour="14" desc="rain" temp="10" />
            <HourForecast hour="15" desc="snow" temp="9" />
            <HourForecast hour="16" desc="thunderstorm" temp="9" />
            <HourForecast hour="17" desc="wind" temp="10" />
          </div>
        </div>
      </div>
    );
  }
  
  export default HourlyForecast;