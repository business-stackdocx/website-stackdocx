import React from 'react';
import HomeBg from './HomeBg.gif'; // Import the GIF from the same folder

const Home = () => {
  // Function to scroll to contact (implement based on your needs)
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="relative h-screen w-screen"
      style={{
        backgroundImage: `url(${HomeBg})`, // Use the imported GIF as the background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Input field and button moved higher */}
      <div className="absolute bottom-40 w-full flex justify-center">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Your Inquiry is the Key! Share your @email"
            className="bg-transparent border-b-4 border-gray-400 text-white placeholder-gray-200 focus:outline-none focus:border-white py-1 px-2 w-full sm:w-80"
          />
          <button
            onClick={scrollToContact}
            className="bg-red text-white px-7 py-2 rounded-md hover:bg-gray-800 w-full sm:w-auto"
          >
            Request A Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
