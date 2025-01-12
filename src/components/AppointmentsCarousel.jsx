import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronRight, Check } from "lucide-react";

const AppointmentCard = ({ appointment }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        {/* Adjust font size based on screen size */}
        <h2 className="text-navy-900 font-bold truncate text-lg sm:text-base">
          {appointment.name}
        </h2>
      </div>
      <ChevronRight className="text-blue-500 flex-shrink-0" size={24} />
    </div>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
        <Check className="text-white" size={14} />
      </div>
      {/* Adjust font size based on screen size */}
      <span className="text-navy-900 font-semibold text-lg sm:text-base">
        {appointment.status}
      </span>
    </div>
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          {/* Adjust font size for date */}
          <h3 className="font-bold text-lg sm:text-base">{appointment.date}</h3>
          <p className="text-gray-600 text-sm">{appointment.day}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-base">{appointment.time}</h3>
          <p className="text-gray-600 text-sm">{appointment.type}</p>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-base">{appointment.tests}</h3>
          <p className="text-gray-600 text-sm">Lab Tests</p>
        </div>
      </div>
    </div>
  </div>
);


const AppointmentsCarousel = ({ appointments }) => {
  return (
    <div className="px-4 mx-auto mt-4">
      {/* Carousel for Small Screens */}
      <div className="block lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {appointments.map((appointment) => (
            <SwiperSlide key={appointment.id}>
              <AppointmentCard appointment={appointment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Single Row for Large Screens */}
      <div className="hidden lg:flex lg:space-x-4 lg:overflow-x-auto">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="lg:w-80 lg:flex-shrink-0">
            <AppointmentCard appointment={appointment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsCarousel;
