import style from './style.css';

import MainPane from '../../components/MainPane';
import HourlyForecast from '../../components/HourlyForecast';
import FiveDayForecast from '../../components/FiveDayForecast';

function WeatherOverviewPage() {
  return (
    <>
      <div className="section">
        <MainPane />
      </div>
      <div className="section">
        <HourlyForecast />
      </div>
      <div className="">
        <FiveDayForecast />
      </div>
    </>
  );
}

export default WeatherOverviewPage;
