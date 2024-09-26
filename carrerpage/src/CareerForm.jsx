import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('resume', formData.resume);

    fetch('http://localhost:5000/api/career', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Application submitted:', data);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: '',
          resume: null,
        });
      })
      .catch((error) => {
        console.error('Error submitting application:', error);
      });
  };

  return (
    <div id="career">
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="max-w-6x3 mx-auto p-8 bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">Apply for a Position</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">
                    STACKDOCX Solutions Private LTD
                    <br /> 8th Floor, Bootstart, VCC Vantage
                    <br /> Baner Landmark
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">hr@stackdocx.com</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-gray-600">Full Name*</label>
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
                <label htmlFor="email" className="block text-gray-600">Email*</label>
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
                <label htmlFor="phone" className="block text-gray-600">Phone*</label>
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
                <label htmlFor="message" className="block text-gray-600">Message*</label>
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
              <div className="space-y-2">
                <label htmlFor="resume" className="block text-gray-600">Upload Resume*</label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={handleFileChange}
                  className="w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
