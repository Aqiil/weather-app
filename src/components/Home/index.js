import './style.css';

import home from '../../assets/icons/ui/home.png';
import WeatherOverviewPage from '../../pages/WeatherOverviewPage';
import { useState } from 'react';

function Home({ onClick }) {
  return (
    <img className='home-icon' onClick={onClick} src={home} alt="Home screen icon" />
  );
}

export default Home;