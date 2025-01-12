import React from 'react'

const Safety = ({ data }) => {

  const safetyArray = data.props;
 

  return (
    <div className="px-8 max-auto mb-7">
      <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl mb-4">
        100% Safe & Secure Labs
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {safetyArray.map((e) => (
          <div
            key={e.id || e.img}
            className="bg-blue-200 rounded-md p-4 w-full sm:w-60 md:w-72 lg:w-80 h-auto flex flex-col items-center mb-4"
          >
            <img src={e.img} alt={e.title} className="w-20 h-20 object-contain mb-4" />
            <h1 className="text-center text-lg font-semibold mb-2">{e.title}</h1>
            <p className="text-center text-sm">{e.subText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Safety
