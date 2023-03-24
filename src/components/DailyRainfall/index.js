import rainfall_icon from '../../assets/icons/weather/rainfall_icon.png';

import './style.css';
import React from 'react';

function DailyRainfall({ coverage, time }) {
  return (
    <div className="daily-rainfall-container">
      <img src={rainfall_icon} alt="Weather Icon" />
      <div className="daily-rainfall">
        {coverage !== null && time !== null ? (
          <>
            <div className="daily-rainfall">
              <p>{coverage}%</p>
            </div>
            <div className="daily-rainfall">
              <p>{time}</p>
            </div>
          </>
        ) : (
          <div className="daily-rainfall">
            <p>&lt;1%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyRainfall;