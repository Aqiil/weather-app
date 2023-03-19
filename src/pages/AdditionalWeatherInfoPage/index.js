import style from './style.css';

import Home from '../../components/Home';
import Search from '../../components/Search';
import LocationCaroussel from '../../components/LocationCaroussel';
import GlobalLocationPanes from '../../components/GlobalLocationPanes';

function AdditionalWeatherInfoPage() {
  return (
    <>
      <div className="additional-weather-info-page-container">
        <div className="section">
          <Search />
          <Home />
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