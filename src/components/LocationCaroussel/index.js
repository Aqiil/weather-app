import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LocationPane from '../LocationPane';
import './style.css';

function LocationCaroussel({ locations }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <>
      <h3 className="inter-semi-bold section">Your Locations</h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {locations.map((location, index) => (
            <LocationPane
              key={index}
              co={index === 0 ? 'Current Location' :location.co}
              loc={location.loc}
              time={location.time}
              temp={location.temp}
              desc={location.desc}
            />
          ))}
        </Slider>
        <div className="carousel-dots-container">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationCaroussel;