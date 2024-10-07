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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('resume', formData.resume);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting application.');
    }
  };

  return (
    <div id="career">
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="w-full max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg"> {/* Updated max width */}
          <div className="flex justify-center mb-8">
            {/* Add your company logo here */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">Apply for a Position</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">STACKDOCX Solutions Private LTD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">hr@stackdocx.com</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
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
                <label htmlFor="message" className="block text-gray-600">Cover Letter*</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 p-2"
                  placeholder="Write a brief cover letter"
                  required
                />
              </div>

              <div className="relative">
                <label
                  title="Click to upload"
                  htmlFor="resume"
                  className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <div className="w-max relative">
                    <img
                      className="w-12"
                      src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                      alt="file upload icon"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div className="relative">
                    <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                      Upload Resume
                    </span>
                    <span className="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
                  </div>
                </label>
                <input hidden type="file" name="resume" id="resume" onChange={handleFileChange} />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
