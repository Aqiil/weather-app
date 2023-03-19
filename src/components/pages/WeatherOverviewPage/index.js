import style from './style.css';

import MainPane from '../../MainPane';
import HourlyForecast from '../../HourlyForecast';
import FiveDayForecast from '../../FiveDayForecast';

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
