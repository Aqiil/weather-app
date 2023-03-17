import broken_clouds from '../../assets/icons/weather/broken_clouds.png';
import clear_sky from '../../assets/icons/weather/clear_sky.png';
import few_clouds from '../../assets/icons/weather/few_clouds.png';
import mist from '../../assets/icons/weather/mist.png';
import rain from '../../assets/icons/weather/rain.png';
import scattered_clouds from '../../assets/icons/weather/scattered_clouds.png';
import shower_rain from '../../assets/icons/weather/shower_rain.png';
import snow from '../../assets/icons/weather/snow.png';
import thunderstorm from '../../assets/icons/weather/thunderstorm.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';

import './style.css';
import React, { useState, useEffect } from 'react';

function MainPane() {
	const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', options);

	const [weatherData, setWeatherData] = useState(null);

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
			<div className="main-pane-container-wrapper">
				<div className="main-pane-container">
					{/* Current weather condition icon */}
					<img src={iconMap[weatherData?.desc]} className="weather-icon" alt="weather condition" />

					{/* Conditional check to verify weatherData is not null */}
					{weatherData ? (
						<>
						{/* Weather info */}
						<h1>{weatherData.temp}</h1>
						<h3 className='inter-reg'>{weatherData.loc}</h3>
						<h2 className='capitalize'>{weatherData.desc}</h2>
						<h3 className='inter-reg'>{formattedDate}</h3>
						</>
					) : (
					  <p>Loading weather data...</p>
					)}
				</div>
				{/* Forecast pane container */}
				<hr/>
				<div className="main-pane-sub-container">
					{/* Forecast pane */}
					<DailyRainfall coverage='90' time='10:30' />
					<DailyHL high={weatherData?.temp + 5} low={weatherData?.temp - 5} />
				</div>
			</div>
		</>
	)
}

export default MainPane;