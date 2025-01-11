import React ,{useState}from 'react'
import ButtonSlider from './ButtonSlider';


const LabTests = () => {
    const[active , setActive]=useState("Complete Body Checkup")
    const onClickActive = (button) => {
        setActive(button);
      };
    const labTestFilters = [
        "Complete Body Checkup",
        "Diabetes Panel",
        "Thyroid Panel",
        "Liver Function Test",
        "Kidney Function Test",
        "Home Sample Collection",
        "Centre Visit",
        "General Health Check",
        "Women’s Health",
        "Men’s Health",
        "Kids Health",
        "Same-Day Reports",
        "NABL Accredited Labs",
        "ISO Certified Labs",
        "For Amazon Employees",
        "Corporate Packages",
        "COVID-19 Test",
        "Heart Health Panel",
        "Allergy Test",
        "Cancer Screening"
      ];
      
      console.log(labTestFilters);
      
  return (
    <div className='px-8 mx-auto'>
     <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl">Book Popular Lab Tests</h1>
        <h1 className="text-sky-600 font-semibold text-sm md:text-2xl-base md:text-2xl">View All</h1>
      </div>
      <div className="mb-4">
        <ButtonSlider 
          buttons={labTestFilters} 
          activeButton={active} 
          onButtonClick={onClickActive} 
        />
      </div>
    </div>
  )
}

export default LabTests
