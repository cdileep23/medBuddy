import React ,{useState}from 'react'
import ButtonSlider from './ButtonSlider';
import LabTestCard from './LabTestCard';


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
      const sampleTests = [
        {
          id: 1,
          name: "Complete Blood Count (CBC) - EDTA Whole Blood",
          price: 800,
          discount: 55,
          reportTime: "10-12 hrs",
          isHomeCollection: true,
          isLabVisit: true,
          isCashless: true
        },
        {
          id: 2,
          name: "Thyroid Profile Test (T3, T4, TSH)",
          price: 1200,
          discount: 45,
          reportTime: "24 hrs",
          isHomeCollection: true,
          isLabVisit: false,
          isCashless: true
        },
        {
          id: 3,
          name: "Vitamin D Total-25 Hydroxy",
          price: 1500,
          discount: 40,
          reportTime: "24-36 hrs",
          isHomeCollection: true,
          isLabVisit: true,
          isCashless: false
        },
        {
          id: 4,
          name: "HbA1c (Glycated Hemoglobin)",
          price: 600,
          discount: 35,
          reportTime: "12 hrs",
          isHomeCollection: true,
          isLabVisit: true,
          isCashless: true
        }
      ];
      
      
    
      
  return (
    <div className='px-8 mx-auto mb-8'>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sampleTests.map(test => (
          <LabTestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  )
}

export default LabTests
