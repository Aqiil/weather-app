import clear from '../../assets/icons/forecast/clear.png';
import clouds from '../../assets/icons/forecast/clouds.png';
import rain from '../../assets/icons/forecast/rain.png';
import snow from '../../assets/icons/forecast/snow.png';
import thunderstorm from '../../assets/icons/forecast/thunderstorm.png';
import wind from '../../assets/icons/forecast/wind.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';

import './style.css';
import React from 'react';

function DayForecast({mainDesc, high, low, firstDay,dayNumber}) {

    const iconMap = {
        'Clear': clear,
        'Clouds': clouds,
        'Rain': rain,
        'Snow': snow,
        'Thunderstorm': thunderstorm,
        'Wind': wind
      };
    
      const today = new Date().getDay(); // get the index of today's day (0-6)
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      // create a new array with the next 4 days (excluding today)
      const fiveDays = [
        "Today",
        days[(today + 1) % 7], // tomorrow
        days[(today + 2) % 7], // the day after tomorrow
        days[(today + 3) % 7], // 2 days after tomorrow
        days[(today + 4) % 7], // 3 days after tomorrow
      ];
  return (

    <div className='day-forecast-container' id = {firstDay ? 'firstDay' : null}>
        <div className='day'>
            <div className="dayinside" >
                {fiveDays[dayNumber]}
            </div>
            <div className='weather-picture'>
                <img src={iconMap[mainDesc]} alt="weather condition"/>
            </div>
            <div className='rain'>
                <DailyRainfall coverage='90' time='10:30' />
            </div>
            <div className='hL'>
                <DailyHL high={high} low={low} />
            </div>
        </div>
    </div>
  );
}

export default DayForecast;