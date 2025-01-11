import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Service from './components/Service';
import LabTests from './components/LabTests';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Banner from './components/Banner';
import axios from 'axios';
import HealthCheck from './components/HealthCheck';
import Bookings from './components/Bookings';

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
      console.log(response.data)
      setData(response.data[0].page_config);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      
  
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
        </div>
      ) : (
        <>
        <Service serviceData={data[0]} /> 
        <Banner bannerData={data[1]} />
        <HealthCheck data={data[2]}/>
        <Bookings/>
        <LabTests/>
        </>
      )}
    </>
  );
};

export default App;
