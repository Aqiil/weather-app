import demo_icon from '../../assets/icons/weather/demo.png';
import HourlyForecast from '../HourlyForecast';
import FiveDayForecast from '../FiveDayForecast';

import './style.css';
import React, { useState, useEffect } from 'react';

function MainPane() {
	const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', options);

	const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b');
      const data = await response.json();
      setWeatherData({
        desc: data.weather[0].description,
        loc: data.name,
        temp: Math.round(data.main.temp)
      });
    }
    fetchData();
  }, []);

	return (
		<>
			{/* Main pane container */}
			<div className="container-wrapper">
				<div className="container">
					{/* Current weather condition icon */}
					<img src={demo_icon} className="demo-icon" alt="partly cloudy" />

					{/* Conditional check to verify weatherData is not null */}
					{weatherData ? (
						<>
						{/* Weather info */}
						<h1>{weatherData.temp}</h1>
						<h3 className='inter-reg'>{weatherData.loc}</h3>
						<h2>{weatherData.desc}</h2>
						<h3 className='inter-reg'>{formattedDate}</h3>
						</>
					) : (
					  <p>Loading weather data...</p>
					)}
				</div>
			</div>
			<hr/>
			{/* Forecast pane container */}
			<div className="container">
				{/* Forecast pane */}
			</div>
			<HourlyForecast />
			<FiveDayForecast />
		</>
	)
}

export default MainPane;