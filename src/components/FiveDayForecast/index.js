import './style.css';
import React, { useState, useEffect } from 'react';

function FiveDayForecast() {
    const [dailyData, setDailyData] = useState(null);
  
    useEffect(() => {
      const fetchDailyData = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b');
        const data = await response.json();
        setDailyData(data.list.filter((_, index) => index % 8 === 0).slice(1, 6)); // Get 5 days of data, 8 data points per day
      };
      fetchDailyData();
    }, []);
  
    return (
      <div className="five-day-forecast-container-wrapper">
        {/* Display five-day forecast data */}
      </div>
    );
  }
  
  export default FiveDayForecast;
  