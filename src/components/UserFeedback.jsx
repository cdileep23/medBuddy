import React from 'react'
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const UserFeedback = ({
    data
}) => {
    console.log(data.props)
    const reviews=data.props;


  return (
    <div className='px-8 mb-8 mx-auto'>
      <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl">What our Users Say</h1>
        <div className="block lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Single Row */}
      <div className="hidden lg:flex lg:space-x-4 lg:overflow-x-auto">
        {reviews.map((review, index) => (
          <div key={index} className="lg:w-80 lg:flex-shrink-0">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserFeedback
