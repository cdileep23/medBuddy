import React from 'react';
import { useNavigate } from 'react-router-dom';

const EachService = (props) => {
  const { serviceObj } = props;
  const { iconUrl, deepLink, iconText, iconTag } = serviceObj;

const handleOnClick=()=>{
    window.location.href = deepLink;
}
  return (
    <a href={deepLink}   className="flex flex-col items-center p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 hover:bg-gray-50  cursor-pointer">
      <div className="relative">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2"
          src={iconUrl}
          alt={iconText}
        />
        {iconTag && (
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            {iconTag}
          </span>
        )}
      </div>
      <h2 className="text-center text-sm sm:text-base font-medium text-gray-800 mt-2">
        {iconText}
      </h2>
    </a>
  );
};

export default EachService;