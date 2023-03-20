import './style.css';

import home from '../../assets/icons/ui/home.png';
import WeatherOverviewPage from '../../pages/WeatherOverviewPage';
import { useState } from 'react';

function Home() {
  return (
    <img className='home-icon' src={home} alt="Home screen icon" />
  );
}

export default Home;