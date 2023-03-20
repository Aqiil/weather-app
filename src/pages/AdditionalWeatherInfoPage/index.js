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

  // Search for a city
  const onSearchCity = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      const newLocation = {
        co: data.sys.country,
        loc: data.name,
        time: formatTimezoneOffset(data.timezone),
        temp: Math.round(data.main.temp),
        desc: data.weather[0].main,
      };
      setGlobalLocations((prevLocations) => [newLocation, ...prevLocations.slice(0, -1)]);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch initial data on component mount
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <>
      <div className="additional-weather-info-page-container">
        <div className="section">
          <Search onSearch={onSearchCity} />
          <LocationCaroussel locations={yourLocations} />
        </div>
        <div>
          <GlobalLocationPanes locations={globalLocations}/>
        </div>
      </div>
    </>
  );
}

export default AdditionalWeatherInfoPage;