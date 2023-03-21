//Change API call and fix the temp problems
import clear from '../../assets/icons/forecast/clear.png';
import clouds from '../../assets/icons/forecast/clouds.png';
import rain from '../../assets/icons/forecast/rain.png';
import snow from '../../assets/icons/forecast/snow.png';
import thunderstorm from '../../assets/icons/forecast/thunderstorm.png';
import wind from '../../assets/icons/forecast/wind.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';
import DayForecast from '../DayForecast'

import '../../assets/reset.css'
import './style.css';
import React, { useState, useEffect } from 'react';

function FiveDayForecast() {
    const [dailyData, setDailyData] = useState(null);
  
    const iconMap = {
      'Clear': clear,
      'Clouds': clouds,
      'Rain': rain,
      'Snow': snow,
      'Thunderstorm': thunderstorm,
      'Wind': wind
    };

    useEffect(() => {
      const fetchDailyData = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&cnt=48&APPID=cbfe29932a8bb4e7f20315babd8f135b');
        const data = await response.json();
        setDailyData(data.list.filter((_, index) => index % 8 === 0).slice(0, 6)); // Get 6 days of data, 8 data points per day
      };
      fetchDailyData();
    }, []);
    
  console.log(dailyData);

    return (
      <div className="five-day-forecast-container-wrapper">
        {dailyData ? (
            <div className='five-days'>
                <DayForecast mainDesc = {dailyData[0].weather[0].main} high = {dailyData[0].main.temp_max} low = {dailyData[0].main.temp_min} firstDay = {true} dayNumber = {0}/>
                <DayForecast mainDesc = {dailyData[0].weather[0].main} high = {dailyData[1].main.temp_max} low = {dailyData[1].main.temp_min} firstDay = {false} dayNumber = {1}/>
                <DayForecast mainDesc = {dailyData[0].weather[0].main} high = {dailyData[2].main.temp_max} low = {dailyData[2].main.temp_min} firstDay = {false} dayNumber = {2}/>
                <DayForecast mainDesc = {dailyData[0].weather[0].main} high = {dailyData[3].main.temp_max} low = {dailyData[3].main.temp_min} firstDay = {false} dayNumber = {3}/>
                <DayForecast mainDesc = {dailyData[0].weather[0].main} high = {dailyData[4].main.temp_max} low = {dailyData[4].main.temp_min} firstDay = {false} dayNumber = {4}/>
            </div>                      
        ) : (
            <div>Loading...</div>            
        )
        }
      </div>
    );
  }
  
  export default FiveDayForecast;
  