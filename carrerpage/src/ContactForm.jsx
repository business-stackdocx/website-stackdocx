import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data submitted:', formData);
  };

  return (
    <div id="contact"> 
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="max-w-4x2 mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center flex justify-center items-center text-black">
        <FontAwesomeIcon icon={faEnvelope} className="text-black-600 mr-3 text-4xl" />
        <span className="text-black">
          Contact Us
        </span>
      </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Left Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Let’s talk about your Idea.
              </h2>
              <div className="space-y-4">
                {/* Address Section */}
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V7zm-6 10V7v10zm4-10v10" />
                  </svg>
                  <span className="text-gray-600">
                    STACKDOCX Solutions Private LTD
                    <br /> 8th Floor, Bootstart, VCC Vantage
                    <br /> Baner Landmark
                  </span>
                </div>

                {/* Email Section */}
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v2H8v-2l-4-4v10h16V8l-4 4zm0 0L8 6v6" />
                  </svg>
                  <span className="text-gray-600">
                    business@stackdocx.com
                  </span>
                </div>

                {/* Phone Section */}
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18v14H3V5z" />
                  </svg>
                  <span className="text-gray-600">
                    +91 9876543210
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <label htmlFor="fullName" className="block text-gray-600">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 p-2"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-600">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 p-2"
                  placeholder="example@yourmail.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-gray-600">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 p-2"
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-600">
                  Message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 p-2"
                  placeholder="Type your message here"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
