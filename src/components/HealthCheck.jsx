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

  const checkUpsArr = props[0]?.packages || [];

  const packagesToRender = checkUpsArr.filter((packageItem) =>
    packageItem.subCategories.includes(active.toUpperCase())
  );

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: packagesToRender.length < 4, // Enable centering if fewer than 4 items
    centerPadding: packagesToRender.length < 4 ? '20%' : '0', // Adjust padding if centered
    focusOnSelect: true,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          swipe: true,
          swipeToSlide: true,
          centerMode: packagesToRender.length < 3,
          centerPadding: packagesToRender.length < 3 ? '15%' : '0',
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
      <div className="slider-container"> {/* Add a wrapper here for better control */}
        {packagesToRender.length > 0 ? (
          <Slider {...sliderSettings}>
            {packagesToRender.map((healthPackage, index) => (
              <EachHealthCheckUp health={healthPackage} key={`${healthPackage.contractId}-${index}`} />
            ))}
          </Slider>
        ) : (
          <div className="text-center py-4 text-gray-500">
            No checkup available in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthCheck;
