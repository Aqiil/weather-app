import temp_icon from '../../assets/icons/weather/temp_icon.png';

import './style.css';
import React from 'react';

function DailyHL({ high, low }) {
  return (
    <div className="daily-hl-container">
      <img src={temp_icon} alt="Weather Icon" />
      <div className="daily-hl-temps">
        <div className="daily-hl-temp">
          <p>H: {Math.round(high*10) / 10}°</p>
        </div>
        <div className="daily-hl-temp">
            <p>L: {Math.round(low*10) / 10}°</p>
        </div>
      </div>
    </div>
  );
}

export default DailyHL;
