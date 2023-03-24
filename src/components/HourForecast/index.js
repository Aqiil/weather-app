import clear from '../../assets/icons/forecast/clear.png';
import clouds from '../../assets/icons/forecast/clouds.png';
import rain from '../../assets/icons/forecast/rain.png';
import snow from '../../assets/icons/forecast/snow.png';
import thunderstorm from '../../assets/icons/forecast/thunderstorm.png';
import wind from '../../assets/icons/forecast/wind.png';

import './style.css';

function HourForecast({ hour, desc, temp }) {

  const iconMap = {
    clear: clear,
    clouds: clouds,
    rain: rain,
    snow: snow,
    thunderstorm: thunderstorm,
    wind: wind
  };

  return (
    <div className="hour-forecast-container">
      <p>{hour}</p>
      <img src={iconMap[desc]} alt="Weather Icon" />
      <p>{temp}°</p>
    </div>
  );
}

export default HourForecast;