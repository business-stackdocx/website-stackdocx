import React from 'react';
import QA from '../assets/QA.jpg';

function Home() {
  return (
    <div className="bg-gray-100 p-8 md:p-16 rounded-lg shadow-lg space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          AI Solutions Overview
        </h1>
        <p className="text-gray-600">
          At STACKDOCX SOLUTIONS PVT LMT, we specialize in providing cutting-edge Artificial
          Intelligence (AI) solutions that help businesses enhance operational efficiency, automate
          complex processes, and deliver personalized experiences.{" "}
          <span className="font-semibold"></span>,{" "}
          <span className="font-semibold"></span>To develop a customized AI solution
          designed to optimize your{" "}
          <span className="font-semibold">specific business process or goal</span>.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={QA} // Replace with the actual image URL
          alt="AI Solutions"
          className="w-full md:w-1/2 rounded-lg shadow-md" // Changed to md:w-1/2 for smaller size
        />
      </div>

      {/* Challenges Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Challenges</h2>
        <p className="text-gray-600">
          The client was facing difficulties in managing large datasets and lacked the ability to
          derive actionable insights from them. Their existing systems were inefficient in processing
          and analyzing data, resulting in delayed decision-making. They needed an AI-driven solution
          that could not only automate these processes but also provide predictive analytics to
          improve business outcomes.
        </p>
      </div>

      {/* Solution Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Solution</h2>
        <p className="text-gray-600">
          Our team implemented a comprehensive AI solution tailored to the client’s needs. We employed
          machine learning algorithms to analyze large volumes of data and deliver actionable insights
          in real-time. Key features of the AI solution include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Predictive analytics to forecast future trends and optimize decision-making.</li>
          <li>
            Natural Language Processing (NLP) to automate customer service through chatbots and
            sentiment analysis.
          </li>
          <li>
            Computer vision to streamline visual data processing tasks such as quality control and
            image recognition.
          </li>
          <li>
            Data automation and integration for seamless processing of structured and unstructured
            data from various sources.
          </li>
        </ul>
        <p className="text-gray-600">
          We integrated this AI solution into the client’s existing systems, allowing them to automate
          workflows, enhance operational efficiency, and make data-driven decisions faster.
        </p>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Results</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>40% improvement in operational efficiency through automated data processing and real-time insights.</li>
          <li>Predictive accuracy improved by 35%, enabling the client to forecast demand and adjust resources accordingly.</li>
          <li>Reduced response time by 50% with the implementation of AI-powered customer service tools, improving customer satisfaction.</li>
          <li>Increased data accuracy and actionable insights, resulting in better decision-making and improved business outcomes.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
