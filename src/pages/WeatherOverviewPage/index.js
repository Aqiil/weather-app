import MainPane from '../../components/MainPane';
import HourlyForecast from '../../components/HourlyForecast';
import FiveDayForecast from '../../components/FiveDayForecast';

function WeatherOverviewPage({ onClick }) {
  return (
    <>
    {/* Change code so that Location and API key are passed in as props */}
      <div className="section">
        <MainPane onClick={onClick}/>
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