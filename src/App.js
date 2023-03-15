import demo_icon from './assets/icons/weather/demo.png';
import './assets/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Main pane container */}
        <div className="container">
          {/* Current weather condition icon */}
          <img src={demo_icon} className="demo-icon" alt="partly cloudy" />
          {/* Weather info */}
          <h1>12°</h1>
          <h4>London</h4>
          <h3>Partly Cloudy</h3>
          <h4>Sunday, 19 March</h4>
        </div>
      </header>
      {/* Forecast pane container */}
      <div className="container">

      </div>
    </div>
  );
}

export default App;
