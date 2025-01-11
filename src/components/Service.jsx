import React from 'react';
import EachService from './EachService';

const Service = (props) => {
  


const{serviceData}=props;

const jsonObj=serviceData.props;

  return (
  
    <div className="container mx-auto px-7 py-6">
    <div className="flex flex-wrap -mx-4">
      {jsonObj.map((service, index) => (
        <EachService key={index} serviceObj={service} />
      ))}
    </div>
  </div>
   
  );
};

export default Service;
