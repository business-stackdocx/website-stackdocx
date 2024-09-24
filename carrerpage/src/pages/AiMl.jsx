import React from 'react';

function Home() {
  return (
    <>
      <div className="m-5 p-12 text-center text-gray-800">
        <h1 className="text-4xl mb-5 font-bold">
          Artificial Intelligence And Machine Learning
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg md:text-xl text-justify text-gray-600 max-w-xl mx-auto">
            Our expert team specializes in crafting high-performance native and hybrid apps in
            <strong > Artificial Intelligence</strong> and
            <strong > Machine Learning</strong> that make a splash in the app store.
            We bring your ideas to life, ranging from social media to online stores, with exceptional design and
            functionality. Trust us to create apps that will exceed your expectations..! We're committed to improving
            the lives of as many people as possible. And we'll continue to responsibly build products and platforms
            powered by the most advanced technology for people around the world..!
          </p>
          <img
            src="https://webcdn.ringover.com/assets/desktop/all/products/ai-phone-system/06-ai-phone-system.png"
            alt="no img"
            className="w-80 h-80 md:w-[650px] md:h-[650px] mx-auto my-5"
          />
        </div>
      </div>

      <div className="container mx-auto p-10 text-gray-800">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-5">
          Our Expertise & Technology Knowledge
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 leading-relaxed tracking-wide">
        We Create a durable and responsive mobile app with excellent user experience using with the help of Artificial Intelligence and Machine Learning. Use our native development strategy for optimized advanced features and smooth. Transform your data into actionable insights with cutting-edge AI and ML solutions that drive                 innovation and optimize performance. Empowering businesses with AI-driven strategies to automate processes, enhance decision-making, and unlock new opportunities.
        Specializing in custom AI development to deliver transformative insights and data-driven decisions for your enterprise. Harness the power of machine learning to turn  complex problems into scalable solutions that accelerate growth and innovation. Revolutionize your operations with advanced AI models that learn, adapt, and deliver  results beyond expectations.
        </p>

        <div className="flex flex-wrap justify-center mt-10">
          <div className="bg-blue-500 text-left text-white rounded-lg p-8 m-4 w-80 h-40">
            Detail-oriented design and development
          </div>
          <div className="bg-blue-500 text-left text-white rounded-lg p-8 m-4 w-80 h-40">
            Native and hybrid app development
          </div>
          <div className="bg-blue-500 text-left text-white rounded-lg p-8 m-4 w-80 h-40">
            Performance-oriented and lightweight apps
          </div>
          <div className="bg-blue-500 text-left text-white rounded-lg p-8 m-4 w-80 h-40">
            Scalable and security-by-design approach
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center my-20">
        <h1 className="text-4xl font-bold text-black mb-5">
          Our Application <strong >Development</strong> <strong >Services</strong>
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-100 border border-black rounded-lg p-8 m-4 w-80 h-52 text-blue-600 font-bold">
            Native & Cross Platform Apps <br /><br />
            <strong className="text-gray-600 text-sm">
              Create stunning and cross-platform apps that engage our clients. High-performing, scalable, and
              market-ready solutions.
            </strong>
          </div>
          <div className="bg-gray-100 border border-black rounded-lg p-8 m-4 w-80 h-52 text-blue-600 font-bold">
            Enterprise App (For Internal Use) <br /><br />
            <strong className="text-gray-600 text-sm">
              Custom Enterprise apps specific to your business needs. Streamline processes, improve productivity,
              and enhance efficiency.
            </strong>
          </div>
          <div className="bg-gray-100 border border-black rounded-lg p-8 m-4 w-80 h-52 text-blue-600 font-bold">
            Mobile Only & Mobile + Web AppSolution<br /><br />
            <strong className="text-gray-600 text-sm">
              Expert mobile-only and mobile + web app solutions for seamless integration across all devices.
             
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
