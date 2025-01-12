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

  const getSliderSettings = (itemCount) => ({
    infinite: itemCount > 1,
    speed: 500,
    slidesToShow: Math.min(4, itemCount),
    slidesToScroll: 1,
    centerMode: itemCount < 4,
    centerPadding: itemCount < 4 ? '0px' : '0',
    focusOnSelect: true,
    swipe: itemCount > 1,
    swipeToSlide: itemCount > 1,
    arrows: itemCount > 1,
    dots: itemCount > 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, itemCount),
          centerMode: itemCount < 3,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  });

  return (
    <div className="px-7 bg-blue-200 mx-auto pt-4 pb-4">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl">
          Featured Health Check-ups
        </h1>
        <h1 className="text-sky-600 font-semibold text-sm md:text-2xl-base md:text-2xl">
          View All
        </h1>
      </div>
      
      <div className="mb-4">
        <ButtonSlider
          buttons={buttons}
          activeButton={active}
          onButtonClick={onClickActive}
        />
      </div>

      <div className="slider-container">
        {packagesToRender.length > 0 ? (
          packagesToRender.length === 1 ? (
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <EachHealthCheckUp 
                  health={packagesToRender[0]} 
                  key={`${packagesToRender[0].contractId}-0`} 
                />
              </div>
            </div>
          ) : (
            <Slider {...getSliderSettings(packagesToRender.length)}>
              {packagesToRender.map((healthPackage, index) => (
                <div key={`${healthPackage.contractId}-${index}`} className="px-2">
                  <EachHealthCheckUp health={healthPackage} />
                </div>
              ))}
            </Slider>
          )
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