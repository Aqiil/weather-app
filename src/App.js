import './assets/reset.css';
import './assets/iPhone.css';

import WeatherOverviewPage from './pages/WeatherOverviewPage';
import AdditionalWeatherInfoPage from './pages/AdditionalWeatherInfoPage';
import { useState } from 'react';

function App() {
  const [isAdditionalWeatherInfoVisible, setIsAdditionalWeatherInfoVisible] = useState(false);

  const toggleAdditionalWeatherInfo = () => {
    setIsAdditionalWeatherInfoVisible(!isAdditionalWeatherInfoVisible);
  };

  return (
    <div className="App">
      <div className="iPhone-container" onClick={toggleAdditionalWeatherInfo}>
        {isAdditionalWeatherInfoVisible ? <AdditionalWeatherInfoPage /> : <WeatherOverviewPage />}
      </div>
    </div>
  );
}

export default App;