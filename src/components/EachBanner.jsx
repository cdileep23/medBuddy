import React from 'react';

const EachBanner = ({ eachBanner }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <img
        src={eachBanner.bannerUrl}
        alt={eachBanner.title || 'Banner'}
        className="w-full h-40 object-contain rounded-lg" // object-contain ensures full image content without cropping
      />
    </div>
  );
};

export default EachBanner;
