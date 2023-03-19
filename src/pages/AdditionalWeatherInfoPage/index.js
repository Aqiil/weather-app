import style from './style.css';

import YourLocations from '../../components/YourLocations';
import AroundTheWorld from '../../components/AroundTheWorld';

function AdditionalWeatherInfoPage() {
  return (
    <>
      <div className="section">
        <YourLocations />
      </div>
      <div>
        <AroundTheWorld />
      </div>
    </>
  );
}

export default AdditionalWeatherInfoPage;