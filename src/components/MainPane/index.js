import thunderstorm from '../../assets/icons/weather/thunderstorm.png';
import drizzle from '../../assets/icons/weather/shower_rain.png';
import rain from '../../assets/icons/weather/rain.png';
import snow from '../../assets/icons/weather/snow.png';
import clear from '../../assets/icons/weather/clear_sky.png';
import clouds from '../../assets/icons/weather/broken_clouds.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';
import HourlyForecast from '../HourlyForecast';

import './style.css';
import React, { useState, useEffect } from 'react';

function MainPane() {
	const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', options);

	const [weatherData, setWeatherData] = useState(null);

	const iconMap = {    
    'Thunderstorm': thunderstorm,
    'Drizzle': drizzle,
    'Rain': rain,
    'Snow': snow,
    'Clear': clear,
    'Clouds': clouds,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b');
      const data = await response.json();
      setWeatherData({
        desc: data.weather[0].main,
        loc: data.name,
        temp: Math.round(data.main.temp)
      });
    }
    fetchData();
  }, []);

	return (
		<>
			{/* Main pane container */}
			<div className="main-pane-container-wrapper">
				<div className="main-pane-container">
					{/* Current weather condition icon */}
					<img src={iconMap[weatherData?.desc]} className="weather-icon" alt="weather condition" />

					{/* Conditional check to verify weatherData is not null */}
					{weatherData ? (
						<>
						{/* Weather info */}
						<h1>{weatherData.temp}</h1>
						<h3>{weatherData.loc}</h3>
						<h2 className='capitalize'>{weatherData.desc}</h2>
						<h3>{formattedDate}</h3>
						</>
					) : (
					  <p>Loading weather data...</p>
					)}
				</div>
				{/* Daily forecast pane container */}
				<hr className='main-pane-hr'/>
				<div className="main-pane-sub-container">
					<DailyRainfall coverage='90' time='10:30' />
					<DailyHL high={weatherData?.temp + 5} low={weatherData?.temp - 5} />
				</div>
			</div>
		</>
	)
}

export default MainPane;