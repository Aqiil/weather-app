import './style.css';
import React, { useState, useEffect } from 'react';

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
      <div className="hourly-forecast-container">
        {/* Display hourly forecast data */}
      </div>
    );
  }
  
  export default HourlyForecast;  