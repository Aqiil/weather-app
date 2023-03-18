import './assets/reset.css';
import './assets/iPhone.css';
import './assets/App.css';

import MainPane from './components/MainPane';
import HourlyForecast from './components/HourlyForecast';
import FiveDayForecast from './components/FiveDayForecast';

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