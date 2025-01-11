import React from 'react';
import Slider from 'react-slick';
import EachBanner from './EachBanner';

const Banner = (props) => {
  const { bannerData } = props;
  const bannerObj = bannerData.props;


  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    centerMode: true,  
    centerPadding: '0',  
    focusOnSelect: true,  
    swipe: true,  
    swipeToSlide: true,  
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
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
    <div className="px-7 min-w-8xl  mx-auto  mb-10">
      <Slider {...sliderSettings}>
        {bannerObj.map((each) => (
          <EachBanner key={each.order} eachBanner={each} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
