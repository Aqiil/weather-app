import thunderstorm from '../../assets/icons/weather/thunderstorm.png';
import drizzle from '../../assets/icons/weather/shower_rain.png';
import rain from '../../assets/icons/weather/rain.png';
import snow from '../../assets/icons/weather/snow.png';
import clear from '../../assets/icons/weather/clear_sky.png';
import clouds from '../../assets/icons/weather/broken_clouds.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';

import './style.css';
import config from '../../config';
import React, { useState, useEffect } from 'react';

function MainPane({ onClick }) {
	const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('en-UK', options);

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
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${config.DEFAULT_COUNTRY}&units=metric&APPID=${config.API_KEY}`);
      const data = await response.json();

      const currentTime = Math.floor(new Date().getTime() / 1000);
      // Filter data for forecasts for today only
      const today = data.list.filter(item => {
        const itemTime = item.dt;
        return new Date(itemTime * 1000).toDateString() === new Date(currentTime * 1000).toDateString();
      });
      
      // Find the next rain forecast
      const nextRain = data.list.find(item => item.weather[0].main === 'Rain');
      const nextRainTime = nextRain ? new Date(nextRain.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;
      // Convert rain coverage to percentage or set to null if no rain forecast
      const rainCoverage = nextRain ? Math.round(nextRain.pop * 100) : null;
      
      // Find the highest and lowest temperature for today
      const tempArray = today.map(item => item.main.temp);
      const high = Math.round(Math.max(...tempArray));
      const low = Math.round(Math.min(...tempArray));
      
      // console.log(tempArray)
      // console.log(high, low);

      setWeatherData({
        desc: data.list[0].weather[0].main,
        loc: data.city.name,
        temp: Math.round(data.list[0].main.temp),
        nextRainTime,
        rainCoverage,
        high,
        low
      });
    }
    fetchData();
  }, []);

	return (
		<>
			{/* Main pane container */}
			<div className="main-pane-container-wrapper" onClick={onClick}>
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
          <DailyRainfall coverage={weatherData?.rainCoverage} time={weatherData?.nextRainTime} />
          <DailyHL high={weatherData?.high} low={weatherData?.low} />
        </div>
			</div>
		</>
	)
}

export default MainPane;