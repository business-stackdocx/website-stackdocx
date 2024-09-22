import React from 'react'

function DataEngineering() {
  return (
   
    <div className="flex justify-center items-center min-h-screen py-8 ">
    <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden max-w-full">
      {/* Content Section */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Data Engineering
        </h2>
        <p className="text-black text-lg">
      

        

Data engineering is the process of designing and building systems that let people collect and analyze raw data from multiple sources and formats. These systems empower people to find practical applications of the data, which businesses can use to thrive.


Data engineering is the practice of designing and building systems for collecting, storing, and analysing data at scale. It is a broad field with applications in just about every industry. Organisations can collect massive amounts of data, and they need the right people and technology to ensure it is in a highly usable state by the time it reaches data scientists and analysts.

        </p>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3">
        <img 
          className="w-full h-full object-cover" 
          src="https://cdn.prod.website-files.com/664d02b7df5a1880884905ff/664d02b7df5a1880884909df_Data%20engineer.png"
        />
      </div>
    </div>
  </div>
);
}
export default DataEngineering