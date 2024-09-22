import React from 'react';

function Home() {
  // Function to handle scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center min-h-screen bg-white">
      {/* Main Heading */}
      <h1
        className="mt-[-139px] py-1 text-7xl md:text-9xl font-bold text-black mb-12"
        style={{ fontFamily: 'Gilroy' }}
      >
        STACKDOCX
      </h1>

      {/* Input field and button */}
      <div className="flex space-x-9">
        <input
          type="email"
          placeholder="Your Inquiry is the Key! Share your @email"
          className="border-b-4 border-gray-400 focus:outline-none italic focus:border-black py-1 px-2 w-80"
        />
        <button
          onClick={scrollToContact}
          className="bg-black text-white px-7 py-2 rounded-md hover:bg-gray-800"
        >
          Request A Demo
        </button>
      </div>

      {/* Thin line at the bottom of the page */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
    </div>
  );
}

export default Home;
