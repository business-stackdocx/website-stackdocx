import React from "react";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Front-End Developer",
      description:
        "Build responsive and dynamic user interfaces using HTML, CSS, and JavaScript.",
      icon: "fas fa-laptop-code",
    },
    {
      title: "Back-End Developer",
      description:
        "Develop server-side logic and integrate APIs for robust application architecture.",
      icon: "fas fa-database",
    },
    {
      title: "Mobile App Developer",
      description:
        "Create innovative mobile applications for both Android and iOS platforms.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Cloud Engineer",
      description:
        "Manage cloud infrastructure and services to deliver scalable solutions.",
      icon: "fas fa-cloud",
    },
  ];

  return (
    <div>
         <h1 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center mt-6">Featured Jobs</h1>
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-64 transform hover:scale-105 transition-transform duration-300"
        >
          
          <div className="text-4xl text-indigo-600 mb-4">
            <i className={job.icon}></i>
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
