import React from 'react';
import Slider from 'react-slick';

const ButtonSlider = ({ buttons, activeButton, onButtonClick }) => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative p-4">
      <Slider {...sliderSettings}>
        {buttons.map((button) => (
          <div key={button} className="px-3">
            <button
              onClick={() => onButtonClick(button)}
              className={`
                px-6 py-2.5 
                rounded-sm 
                transition-all 
                duration-200 
                w-full 
                p-1
                text-sm 
                font-medium
                whitespace-nowrap
                ${
                  activeButton === button
                    ? 'bg-white text-blue-500  rounded-sm border border-blue-500'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-sm border border-transparent'
                }
              `}
            >
              {button}
            </button>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-track {
          display: flex !important;
          gap: 8px !important;
        }
        .slick-slide {
          margin: 0 4px;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};


export default ButtonSlider;
