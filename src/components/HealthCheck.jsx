import React, { useState } from 'react';
import Slider from 'react-slick';
import EachHealthCheckUp from './EachHealthCheckUp';
import ButtonSlider from './ButtonSlider';

const HealthCheck = ({ data }) => {
  const { props } = data;
  const buttons = data.categories["10386"]; 


  const [active, setActive] = useState("Popular");

  const onClickActive = (button) => {
    setActive(button);
  };

  const checkUpsArr = props[0].packages;

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    swipe: true,
    swipeToSlide: true,
    arrows: false, // Disables arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          swipe: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="px-7 bg-blue-200 mx-auto pt-4 pb-4">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl">Featured Health Check-ups</h1>
        <h1 className="text-sky-600 font-semibold text-sm md:text-2xl-base md:text-2xl">View All</h1>
      </div>
      <div className="mb-4">
        <ButtonSlider 
          buttons={buttons} 
          activeButton={active} 
          onButtonClick={onClickActive} 
        />
      </div>
      <div>
        <Slider {...sliderSettings}>
          {checkUpsArr.map((h, index) => (
            <EachHealthCheckUp health={h} key={`${h.price}-${index}`} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HealthCheck;
