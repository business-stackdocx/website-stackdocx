import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptopCode, faDatabase, faMobileAlt, faCloud } from '@fortawesome/free-solid-svg-icons';

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Front-End Developer",
      description: "Build responsive and dynamic user interfaces using HTML, CSS, and JavaScript.",
      icon: faLaptopCode,
    },
    {
      title: "Back-End Developer",
      description: "Develop server-side logic and integrate APIs for robust application architecture.",
      icon: faDatabase,
    },
    {
      title: "Mobile App Developer",
      description: "Create innovative mobile applications for both Android and iOS platforms.",
      icon: faMobileAlt,
    },
    {
      title: "Cloud Engineer",
      description: "Manage cloud infrastructure and services to deliver scalable solutions.",
      icon: faCloud,
    },
  ];

  return (
    <div>
      <h1 className="pt-8 text-3xl md:text-4xl font-bold mb-12 text-center flex justify-center items-center text-black">
        <FontAwesomeIcon icon={faBriefcase} className="text-black-600 mr-3 text-4xl" />
        <span className="text-black">Featured Jobs</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-64 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl text-indigo-600 mb-4">
              <FontAwesomeIcon icon={job.icon} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-4">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
