import React from 'react';
import { Home, Clock, CreditCard } from 'lucide-react';

const LabTestCard = ({ test }) => {
  const discountedPrice = test.price - (test.price * (test.discount / 100));
  
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="flex-1 min-w-0"> {/* min-w-0 helps with text truncation */}
            <h3 className="text-navy-900 font-bold text-base sm:text-lg truncate">
              {test.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Reports in {test.reportTime}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {test.isHomeCollection && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Home className="w-4 h-4 flex-shrink-0" />
                  <span>Home</span>
                </div>
              )}
              {test.isLabVisit && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <div className="w-4 h-4 flex-shrink-0">🧪</div>
                  <span>Lab</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-1">
            {test.isCashless && (
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <CreditCard className="w-4 h-4 flex-shrink-0" />
                <span>Cashless</span>
              </div>
            )}
            <div className="flex items-center gap-2 justify-end">
              <span className="text-gray-400 line-through text-sm">₹{test.price}/-</span>
              <span className="text-green-600 font-medium text-sm">{test.discount}% OFF</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-navy-900 font-bold">₹{discountedPrice}/-</span>
              <span className="text-gray-500 text-sm">Onwards</span>
            </div>
          </div>
        </div>
        <button className="w-24 h-9 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
          Add
        </button>
      </div>
    </div>
  );
};

export default LabTestCard