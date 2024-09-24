import React from 'react';

function WebDevelopment() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8 ">
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden max-w-full">
        {/* Content Section */}
        <div className="p-6 md:w-2/3">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Web Development
          </h2>
          <p className="text-black text-lg">
            Web development refers to the overall process of creating websites or web applications, including the project’s design, layout, coding, content creation, and functionality. It involves using a combination of programming languages, tools, and frameworks to bring a website or web application to life. It may also encompass project management activities, such as fielding development requests from stakeholders or freelance clients.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/premium-photo/fullstack-development_1327465-13610.jpg?w=740"
            alt="Web Development"
          />
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
