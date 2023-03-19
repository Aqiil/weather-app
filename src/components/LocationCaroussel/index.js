import React, { useState } from 'react';

// Import Slick Slider and CSS
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LocationPane from '../LocationPane';
import './style.css';

function LocationCaroussel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index)
  };

  const locations = [
    { co: 'Current Location', loc: 'London', time: '07:35', temp: '14', desc: 'few clouds' },
    { co: 'France', loc: 'Paris', time: '08:35', temp: '16', desc: 'scattered clouds' },
    { co: 'United States', loc: 'New York', time: '01:35', temp: '10', desc: 'rain' },
    { co: 'Japan', loc: 'Tokyo', time: '15:35', temp: '20', desc: 'clear sky' },
  ];

  return (
    <>
      <h3 className='inter-semi-bold section'>Your Locations</h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {locations.map((location, index) => (
            <LocationPane key={index} co={location.co} loc={location.loc} time={location.time} temp={location.temp} desc={location.desc} />
          ))}
        </Slider>
        <div className="carousel-dots-container">
          {locations.map((location, index) => (
            <div key={index} className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationCaroussel;
