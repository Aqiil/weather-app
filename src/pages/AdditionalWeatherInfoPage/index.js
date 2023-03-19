import style from './style.css';

import LocationCaroussel from '../../components/LocationCaroussel';
import GlobalLocationPanes from '../../components/GlobalLocationPanes';

function AdditionalWeatherInfoPage() {
  return (
    <>
      <div className="additional-weather-info-page-container">
        <div className="section">
          <LocationCaroussel />
        </div>
        <div>
          <GlobalLocationPanes />
        </div>
      </div>
    </>
  );
}

export default AdditionalWeatherInfoPage;