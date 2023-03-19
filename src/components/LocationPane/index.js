import broken_clouds from '../../assets/icons/weather/broken_clouds.png';
import clear_sky from '../../assets/icons/weather/clear_sky.png';
import few_clouds from '../../assets/icons/weather/few_clouds.png';
import mist from '../../assets/icons/weather/mist.png';
import rain from '../../assets/icons/weather/rain.png';
import scattered_clouds from '../../assets/icons/weather/scattered_clouds.png';
import shower_rain from '../../assets/icons/weather/shower_rain.png';
import snow from '../../assets/icons/weather/snow.png';
import thunderstorm from '../../assets/icons/weather/thunderstorm.png';

import './style.css';
import React, { useState, useEffect } from 'react';

function LocationPane({ co, loc, time, temp, desc }) {

  const iconMap = {
    'clear sky': clear_sky,
    'few clouds': few_clouds,
    'scattered clouds': scattered_clouds,
    'broken clouds': broken_clouds,
    'shower rain': shower_rain,
    'rain': rain,
    'thunderstorm': thunderstorm,
    'snow': snow,
    'mist': mist
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