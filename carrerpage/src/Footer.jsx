import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToCareer = () => {
    const careerSection = document.getElementById('career');
    if (careerSection) {
      careerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-600  border-gray-800 text-white py-10 px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left section - Description and contact */}
        <div className="md:max-w-sm">
          <p className="text-white-400 text-sm mb-6 leading-6">
            STACKDOCX SOLUTIONS PVT LTD ® IS A SOFTWARE DEVELOPMENT COMPANY AIMED AT BRINGING INNOVATION TO COMPLEX REQUIREMENTS.
          </p>
          <a
            href="mailto:business@stackdocx.com"
            className="inline-block px-5 py-2 border-2 border-white rounded-full text-white uppercase text-sm transition duration-300 hover:bg-white hover:text-black transform hover:scale-105"
          >
            business@stackdocx.com
          </a>
        </div>

        {/* Right section - Links */}
        <div className="flex flex-col md:items-end mt-8 md:mt-0">
          <ul className="flex flex-col md:flex-col space-y-2">
            <li>
              <a href="#" className="text-white hover:text-red-500 transition-all duration-300 relative group">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LINKEDIN 
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300">→</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 transition-all duration-300 relative group">
                <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                YOUTUBE 
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300">→</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 transition-all duration-300 relative group">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                INSTAGRAM 
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300">→</span>
              </a>
            </li>
            
         
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToCareer(); }} 
                className="text-white hover:text-red-500 transition-all duration-300 relative group"
              >
                CAREERS <span className="absolute right-0 opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300">→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
