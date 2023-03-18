import './assets/reset.css';
import './assets/iPhone.css';
import './assets/App.css';

import MainPane from './components/MainPane';
import HourlyForecast from './components/HourlyForecast';
import FiveDayForecast from './components/FiveDayForecast';

// const api = {
// 	key: 'cbfe29932a8bb4e7f20315babd8f135b',
// 	base: 'http://api.openweathermap.org/data/2.5/',
// 	current: 'weather?q=London&units=metric&APPID=', // London current weather data
// };

function App() {
  return (
    <div className="App">
      <div className="iPhone-container">
        <div className="section">
          <MainPane />
        </div>
        <div className="section">
          <HourlyForecast />
        </div>
        <div className="">
          <FiveDayForecast />
        </div>
      </div>
    </div>
  );
}

export default App;