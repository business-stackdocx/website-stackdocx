import React from 'react'

function QualityAssurance() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
    <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden max-w-full">
      {/* Content Section */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Quality Assurance
        </h2>
        <p className="text-black text-lg">
      

Quality assurance (QA) is a systematic process to ensure that a product or service meets specified requirements. It's a part of quality management that involves a variety of activities to ensure that quality is maintained throughout a product's development, production, testing, packaging, and delivery.

It involves activities and techniques aimed at preventing defects, identifying and resolving issues, and improving overall quality throughout the entire lifecycle of a product or service. Quality assurance (QA) aims to ensure consistent and reliable performance, customer satisfaction, and compliance with regulatory requirements.
        </p>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3">
        <img 
          className="w-full h-full object-cover" 
          src="https://st2.depositphotos.com/7865540/10657/i/450/depositphotos_106576658-stock-photo-gears-and-mechanisms-with-text.jpg"
        />
      </div>
    </div>
  </div>
);
}
export default QualityAssurance