import './assets/reset.css';
import './assets/iPhone.css';
import './assets/App.css';
import MainPane from './components/MainPane';

// const api = {
// 	key: 'cbfe29932a8bb4e7f20315babd8f135b',
// 	base: 'http://api.openweathermap.org/data/2.5/',
// 	current: 'weather?q=London&units=metric&APPID=', // London current weather data
// };

function App() {
  return (
    <div className="iPhone-container">
      <MainPane />
      <MainPane />
    </div>
  );
}

export default App;
