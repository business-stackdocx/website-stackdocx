import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; // Software-related icon

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { title: 'Web Development', description: 'Professional web development services.', route: '/WebDevelopment' },
    { title: 'AI/ML Development', description: 'High-quality AI/ML solutions.', route: '/AIMLDevelopment' },
    { title: 'Mobile App Development', description: 'App development from idea to launch.', route: '/MobileAppDevelopment' },
    { title: 'Data Engineering', description: 'Optimized storage and real-time analytics.', route: '/DataEngineering' },
    { title: 'Quality Assurance', description: 'Systematic quality assurance processes.', route: '/QualityAssurance' },
    { title: 'Automation Testing', description: 'Automation tools for application testing.', route: '/AutomationTesting' },
  ];

  return (
    <div id="services"> 
      {/* Heading with Icon and Black Text */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center flex justify-center items-center text-black">
        <FontAwesomeIcon icon={faLaptopCode} className="text-black-600 mr-3 text-4xl" />
        <span className="text-black">
          Our Services
        </span>
      </h1>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 h-72 hover:bg-purple-100 transition-all duration-300 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center mt-3">{service.title}</h2>
            </div>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <button
              onClick={() => navigate(service.route)}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-all duration-300"
            >
              Learn More &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
