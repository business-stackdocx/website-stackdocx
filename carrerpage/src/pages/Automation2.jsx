import auto from '../assets/auto.jpg';

function Automation2() {
    return (
      <div className="bg-gray-100 p-8 md:p-16 rounded-lg shadow-lg space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Automation Solutions Case Study
        </h1>
        <p className="text-gray-600">
          At <span className="font-semibold">STACKDOCX SOLUTIONS PVT LMT</span>, we specialize in delivering innovative
          automation solutions that streamline processes, reduce operational costs, and enhance overall
          efficiency. <span className="font-semibold"></span>
           <span className="font-semibold"></span>, To implement a comprehensive automation strategy aimed
          at transforming their workflow and improving productivity.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={auto} // Replace with the actual image URL
          alt="Automation Solutions"
          className="w-full md:w-1/2 rounded-lg shadow-md" // Changed from md:w-2/3 to md:w-1/2
        />
      </div>

      {/* Challenge Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Challenges</h2>
        <p className="text-gray-600">
          The client faced challenges with manual, repetitive tasks that consumed significant time and
          resources. Their existing processes were prone to errors, resulting in delays and
          inefficiencies. They sought a solution that could automate these tasks, improve accuracy, and
          free up their workforce to focus on higher-value activities.
        </p>
      </div>

      {/* Solution Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Solutions</h2>
        <p className="text-gray-600">
          Our team conducted a thorough analysis of the clients operations and identified key areas for
          automation. We designed and implemented a customized automation solution that included:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Robotic Process Automation (RPA) to automate routine tasks such as data entry, report
            generation, and invoice processing.
          </li>
          <li>
            Workflow automation to streamline approvals and notifications, reducing bottlenecks in the
            process.
          </li>
          <li>Integration with existing systems to ensure seamless data flow and eliminate silos.</li>
          <li>
            Advanced analytics and reporting capabilities to provide insights into process performance
            and identify further areas for improvement.
          </li>
        </ul>
        <p className="text-gray-600">
          The solution was designed to be scalable, allowing the client to expand automation efforts as
          their business grows.
        </p>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Results</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            60% reduction in processing time for key tasks, enabling the client to reallocate resources
            to more strategic initiatives.
          </li>
          <li>
            75% decrease in errors associated with manual data entry, resulting in higher data accuracy
            and reliability.
          </li>
          <li>
            Improved employee satisfaction, as staff were freed from repetitive tasks and could focus on
            more meaningful work.
          </li>
          <li>
            Enhanced visibility into operational performance through real-time analytics, allowing for
            data-driven decision-making.
          </li>
        </ul>
      </div>
    </div>
  );
};
  
export default Automation2;
