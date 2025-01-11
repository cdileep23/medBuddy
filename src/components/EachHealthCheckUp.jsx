import React, { useState } from "react";
import { Timer, IndianRupee, Home } from "lucide-react";

const HealthCheckupCard = (props) => {
  const { health } = props;


  return (
    <div className="bg-white rounded-lg shadow-sm w-80 h-[32rem] overflow-hidden flex flex-col">
    
      <div className="flex justify-end flex-none">
        <span className="bg-red-600 text-white text-sm px-4 py-1 rounded-bl">
          Sponsored
        </span>
      </div>

      
      <div className="p-4 flex flex-col flex-grow">
    
        <h1 className="text-navy-900 text-xl font-bold mb-4 line-clamp-2">
          {health.packageDisplayName}
        </h1>

     
        <div className="flex items-center gap-2 mb-4 flex-none">
          <Timer className="text-blue-500" size={20} />
          <span className="text-blue-500">
            Reports in {health.reportsTatText}
          </span>
        </div>

        
        <div className="flex justify-between mb-6 flex-none">
          <div>
            <h2 className="font-bold mb-2">90 Tests</h2>
            <ul className="text-gray-600 text-sm space-y-1 max-h-24 overflow-y-auto">
              <li>Cholesterol - Total</li>
              <li>Vitamin D... + 87 more</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2">Includes</h2>
            <div className="flex items-center text-gray-600 text-sm">
              <span className="mr-1">📊</span> Radiology
            </div>
          </div>
        </div>

       
        <div className="flex-grow" />

       
        <div className="flex-none">
         
          <div className="flex justify-between mb-6 bg-gray-50 p-3 rounded">
            <div>
              <h3 className="font-bold text-sm mb-1">Fasting</h3>
              <p className="text-gray-600 text-sm">{health.fastingHoursText}</p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">Available at</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <Home size={16} className="mr-1" />
                <span>Home</span>
              </div>
            </div>
          </div>

          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <IndianRupee size={20} />
              <span className="font-bold text-xl">{health.price}</span>
            </div>
            <button className="p-2 bg-blue-600 rounded-md text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckupCard;