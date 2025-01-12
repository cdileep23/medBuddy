import React from 'react';
import { MapPin, Star } from 'lucide-react';
import "swiper/css";
import "swiper/css/pagination";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 h-full">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, index) => (
            <Star 
              key={index} 
              className="w-5 h-5 fill-yellow-400 text-yellow-400" 
            />
          ))}
        </div>
        {review.location && (
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{review.location}</span>
          </div>
        )}
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{review.content}</p>

      <div className="mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-medium">
              {review.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.days}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
