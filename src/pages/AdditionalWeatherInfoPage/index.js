import { useState, useEffect } from 'react';
import { formatTimezoneOffset } from '../../utils/utils';

import style from './style.css';

import Home from '../../components/Home';
import Search from '../../components/Search';
import LocationCaroussel from '../../components/LocationCaroussel';
import GlobalLocationPanes from '../../components/GlobalLocationPanes';

function AdditionalWeatherInfoPage() {
  const [globalLocations, setGlobalLocations] = useState([]);
  const [yourLocations, setYourLocations] = useState([]);

  const fetchInitialData = async () => {
    // Data for LocationCaroussel component
    try {
      const yourLocationsData = await Promise.all([
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b'),
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brunei&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b'),
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Karlsruhe&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b')
      ]);
      const yourLocationsJson = await Promise.all(yourLocationsData.map(response => response.json()));
      const newYourLocations = yourLocationsJson.map((data) => ({
        co: data.sys.country,
        loc: data.name,
        time: formatTimezoneOffset(data.timezone),
        temp: Math.round(data.main.temp),
        desc: data.weather[0].main,
      }));
      setYourLocations(newYourLocations);
    } catch (error) {
      console.log(error);
    };

    // Data for GlobalLocationPanes component
    try {
      const globalLocationsData = await Promise.all([
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Nairobi&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b'),
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b'),
        fetch('https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b')
      ]);
      const globalLocationsJson = await Promise.all(globalLocationsData.map(response => response.json()));
      const newGlobalLocations = globalLocationsJson.map((data) => ({
        co: data.sys.country,
        loc: data.name,
        time: formatTimezoneOffset(data.timezone),
        temp: Math.round(data.main.temp),
        desc: data.weather[0].main,
      }));
      setGlobalLocations(newGlobalLocations);
    } catch (error) {
      console.log(error);
    };
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleSearch = async (query, setError) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b`);
      if (response.ok) {
        const data = await response.json();
        const location = {
          co: data.sys.country,
          loc: data.name,
          time: formatTimezoneOffset(data.timezone),
          temp: data.main.temp,
          desc: data.weather[0].main,
        };
        const newGlobalLocations = [...globalLocations, location];
        if (newGlobalLocations.length > 3) {
          newGlobalLocations.shift();
        }
        setGlobalLocations(newGlobalLocations);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleRemoveLastLocation = () => {
    const newLocations = globalLocations.slice(0, globalLocations.length - 1);
    setGlobalLocations(newLocations);
  };

  const handleError = () => {
    setError(true);
  };

  const handleClearError = () => {
    setError(false);
  };

  const [error, setError] = useState(false);

  return (
    <>
      <div className="additional-weather-info-page-container">
        <div className="section">
          <Search onSearch={handleSearch} locations={globalLocations} setError={handleError} onClearError={handleClearError} />
          <LocationCaroussel locations={yourLocations} />
        </div>
        <div>
          <GlobalLocationPanes locations={globalLocations} onRemoveLastLocation={handleRemoveLastLocation} setLocations={setGlobalLocations} setError={handleError} />
        </div>
      </div>
    </>
  );
}

export default AdditionalWeatherInfoPage;