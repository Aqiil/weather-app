import './style.css';
import React, { useState, useEffect } from 'react';

import HourForecast from '../HourForecast';
//this is a change
function FiveHourForecast() {

    return (
      <div className="five-hour-component-container">
        <HourForecast hour="12:00" icon="cloudy" temp="12" />
        <HourForecast hour="13:00" icon="cloudy" temp="12" />
        
      </div>
    );
  }
  
  export default FiveHourForecast;  
