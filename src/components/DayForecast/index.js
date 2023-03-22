import clear from '../../assets/icons/forecast/clear.png';
import clouds from '../../assets/icons/forecast/clouds.png';
import rain from '../../assets/icons/forecast/rain.png';
import snow from '../../assets/icons/forecast/snow.png';
import thunderstorm from '../../assets/icons/forecast/thunderstorm.png';
import wind from '../../assets/icons/forecast/wind.png';

import DailyHL from '../DailyHL';
import DailyRainfall from '../DailyRainfall';
import './style.css';

function DayForecast({ day, desc, coverage, high, low }) {

  const iconMap = {
    clear: clear,
    clouds: clouds,
    rain: rain,
    snow: snow,
    thunderstorm: thunderstorm,
    wind: wind
  };

  return (
    <div className="day-forecast-container">
      <p>{day}</p>
      <img src={iconMap[desc]} alt="Weather Icon" />
      <DailyRainfall coverage={coverage} /> {/* Only pass in coverage value to reuse component for daily rain coverage*/}
      <DailyHL high={high} low={low} />
    </div>
  );
}

export default DayForecast;