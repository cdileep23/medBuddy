import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Updated import for modules
import "swiper/css";
import "swiper/css/pagination";
import { ChevronRight, Check } from "lucide-react";

const AppointmentsCarousel = ({ appointments }) => {
  return (
    <div className="px-4 mx-auto mt-4">
      {/* Carousel for Small Screens */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Pagination]} 
        className="block md:hidden" // Visible only on small screens
      >
        {appointments.map((appointment) => (
          <SwiperSlide key={appointment.id}>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <h2 className="text-navy-900 text-lg font-bold">
                    {appointment.name}
                  </h2>
                </div>
                <ChevronRight className="text-blue-500" size={24} />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="text-white" size={14} />
                </div>
                <span className="text-navy-900 font-semibold text-lg">
                  {appointment.status}
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{appointment.date}</h3>
                    <p className="text-gray-600">{appointment.day}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{appointment.time}</h3>
                    <p className="text-gray-600">{appointment.type}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{appointment.tests}</h3>
                    <p className="text-gray-600">Lab Tests</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:grid md:grid-cols-4 md:gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white rounded-lg shadow-sm p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <h2 className="text-navy-900 text-lg font-bold">
                  {appointment.name}
                </h2>
              </div>
              <ChevronRight className="text-blue-500" size={24} />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="text-white" size={14} />
              </div>
              <span className="text-navy-900 font-semibold text-lg">
                {appointment.status}
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold text-lg">{appointment.date}</h3>
                  <p className="text-gray-600">{appointment.day}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{appointment.time}</h3>
                  <p className="text-gray-600">{appointment.type}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{appointment.tests}</h3>
                  <p className="text-gray-600">Lab Tests</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsCarousel;
