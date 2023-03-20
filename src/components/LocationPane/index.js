import thunderstorm from '../../assets/icons/weather/thunderstorm.png';
import drizzle from '../../assets/icons/weather/shower_rain.png';
import rain from '../../assets/icons/weather/rain.png';
import snow from '../../assets/icons/weather/snow.png';
import clear from '../../assets/icons/weather/clear_sky.png';
import clouds from '../../assets/icons/weather/broken_clouds.png';

import './style.css';
import React, { useState, useEffect } from 'react';

function LocationPane({ co, loc, time, temp, desc }) {

  const iconMap = {    
    'Thunderstorm': thunderstorm,
    'Drizzle': drizzle,
    'Rain': rain,
    'Snow': snow,
    'Clear': clear,
    'Clouds': clouds,
  };

  return (
    <div className="location-pane-container">
      <div className="location-pane-info">
        <h5>{co}</h5>
        <h3 className='inter-semi-bold'>{loc}</h3>
        <div className="location-pane-time-temp">
          <h5>{time}</h5>
          <h5>{temp}°</h5>
        </div>
        <h5>{desc}</h5>
      </div>
      <div className="location-pane-img">
        <img src={iconMap[desc]} alt={desc} height='100'/>
      </div>
    </div>
  );
}

export default LocationPane;