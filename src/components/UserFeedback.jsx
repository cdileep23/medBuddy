import React, { useRef } from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const sampleData = [
  {
    content: "A very user-friendly app with accurate health tracking features. Highly recommend it to fitness enthusiasts!",
    days: "15 March 2022",
    location: "New York, USA",
    name: "John Doe",
    rating: 5,
  },
  {
    content: "The services are good, but the app can be improved with faster loading times.",
    days: "10 January 2023",
    location: "London, UK",
    name: "Emma Watson",
    rating: 4,
  },
  {
    content: "Not satisfied with the response time during emergencies. Needs better support.",
    days: "5 December 2021",
    location: "Sydney, Australia",
    name: "Liam Brown",
    rating: 2,
  },
  {
    content: "An excellent app with all the necessary features for health monitoring. The UI is simple and effective.",
    days: "30 November 2022",
    location: "Toronto, Canada",
    name: "Sophia Davis",
    rating: 5,
  },
  {
    content: "Great packages and services, but the app had a few glitches during payment.",
    days: "18 October 2021",
    location: "Mumbai, India",
    name: "Arjun Patel",
    rating: 4,
  },
  {
    content: "The app's interface is confusing, and customer support took too long to respond.",
    days: "12 August 2022",
    location: "Berlin, Germany",
    name: "Hannah Schmidt",
    rating: 3,
  },
  {
    content: "Perfect for regular health checkups. The reminders feature is extremely helpful!",
    days: "22 July 2023",
    location: "Dubai, UAE",
    name: "Ali Khan",
    rating: 5,
  },
  
];


const ScrollButton = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${direction === 'left' ? '-left-4' : '-right-4'} 
        -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2
        hover:bg-gray-50 transition-colors hidden lg:block`}
    >
      <Icon className="w-6 h-6 text-gray-600" />
    </button>
  );
};

const UserFeedback = ({ data }) => {

  const reviews = [...data.props, ...sampleData];
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 320; 

    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-8 mb-8 mx-auto relative">
      <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl mb-6">
        What our Users Say
      </h1>


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

      <div className="hidden lg:block relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-80 flex-shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        <ScrollButton direction="left" onClick={() => handleScroll('left')} />
        <ScrollButton direction="right" onClick={() => handleScroll('right')} />
      </div>
    </div>
  );
};

export default UserFeedback;
