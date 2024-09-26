import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // To show success or error message
  const [previewUrl, setPreviewUrl] = useState(null); // Preview link for Ethereal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Email sent successfully!');
        setPreviewUrl(result.previewUrl); // Set preview URL for Ethereal
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('Error sending email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email.');
    }
  };

  return (
    <div id="contact">
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="max-w-6x3 mx-auto p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
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
          {status && <p className="mt-4 text-center">{status}</p>}
          {previewUrl && (
            <p className="mt-2 text-center">
              Preview the sent email <a href={previewUrl} target="_blank" rel="noopener noreferrer">here</a>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
