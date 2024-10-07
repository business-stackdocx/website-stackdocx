import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCareer = () => {
    const careerSection = document.getElementById('career');
    if (careerSection) {
      careerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-blue-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold" style={{ fontFamily: 'Gilroy' }}>
          STACKDOCX
        </div>

        {/* Nav Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-black">
            Home
          </a>
          
          <a onClick={scrollToContact} href="#" className="text-gray-600 hover:text-black">
            Contact
          </a>

          <a onClick={scrollToServices} href="#" className="text-gray-600 hover:text-black">
            Services
          </a>

          <a onClick={scrollToCareer} href="#" className="text-gray-600 hover:text-black">
            Career
          </a>
        </div>

        {/* Request Demo Button for Desktop */}
        <div className="hidden md:block">
          <button onClick={scrollToContact} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Request A Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a href="#" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a onClick={scrollToContact} href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
            <a onClick={scrollToServices} href="#" className="text-gray-600 hover:text-black">
              Services
            </a>
            <a onClick={scrollToCareer} href="#" className="text-gray-600 hover:text-black">
              Career
            </a>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Request A Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
