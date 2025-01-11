import React from 'react'
import { ChevronRight, Check } from 'lucide-react'; 
import AppointmentsCarousel from './AppointmentsCarousel';

const Bookings = () => {
    const appointments = [
        {
          id: 1,
          name: "Mr. Suresh Gaikwad",
          date: "03 Nov'22",
          day: "Wednesday",
          time: "09:30-10:30 AM",
          type: "Home Sample Collection",
          tests: 3,
          status: "Appointment Confirmed",
        },
        {
          id: 2,
          name: "Ms. Priya Sharma",
          date: "05 Nov'22",
          day: "Friday",
          time: "11:00-12:00 PM",
          type: "Clinic Visit",
          tests: 2,
          status: "Appointment Confirmed",
        },
        {
          id: 3,
          name: "Mr. Rohit Verma",
          date: "07 Nov'22",
          day: "Sunday",
          time: "02:00-03:00 PM",
          type: "Home Sample Collection",
          tests: 5,
          status: "Appointment Confirmed",
        },
        {
          id: 4,
          name: "Dr. Kavita Singh",
          date: "09 Nov'22",
          day: "Tuesday",
          time: "10:00-11:00 AM",
          type: "Clinic Visit",
          tests: 1,
          status: "Appointment Confirmed",
        },
      ];
      
  return (
    <div className='px-7 mx-auto mt-4'>
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl">Your Active Bookings</h1>
        <h1 className="text-sky-600 font-semibold text-sm md:text-2xl-base md:text-2xl">View All</h1>
      </div>
   <div>
    <AppointmentsCarousel appointments={appointments}/>
   </div>
    </div>
  )
}

export default Bookings
