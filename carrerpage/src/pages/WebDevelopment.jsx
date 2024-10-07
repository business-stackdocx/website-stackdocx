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
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          At STACKDOCX SOLUTION PVT LTM, we specialize in building dynamic, responsive, and high-performing websites that drive business growth. Whether you need a custom website tailored to your brand or a powerful e-commerce platform, our web development team brings expertise across various modern technologies and frameworks to deliver exceptional results.<br/>
        	Our Web Development Offerings:<br/>
          <b>1.Custom Web Development</b><br/>
Tailored to your unique business needs, we design and develop fully customized websites that reflect your brand identity and provide seamless user experiences. We ensure that your website is scalable, secure, and optimized for all devices.<br/>
<b>2. E-commerce Solutions</b><br/>
Our expert developers create robust e-commerce platforms that empower businesses to sell products and services online effortlessly. We integrate payment gateways, inventory management, and advanced analytics to help you manage your store with ease and grow your online presence.<br/>
<b>3. Content Management Systems (CMS)</b><br/>
Whether it’s WordPress, Drupal, or a custom-built CMS, we provide flexible, easy-touse platforms that allow you to manage your content without any technical hassles. Our CMS solutions are tailored to suit businesses of all sizes.<br/>
<b>4. Responsive Web Design</b><br/>
In today’s mobile-driven world, having a responsive website is crucial. We design websites that adapt seamlessly to any screen size, ensuring a flawless user experience on desktops, tablets, and mobile devices.<br/>
<b>5. Web App Development</b><br/>
For businesses that require more than just a static website, we create web applications that offer enhanced functionality and user interactivity. From complex portals to custom dashboards, our web apps are designed to streamline your business processes and engage your audience.<br/>
<b>6. API Integration & Development</b><br/>
We build and integrate powerful APIs that connect your website to third-party services, applications, and tools, enhancing the functionality and performance of your web platform.<br/>
 
<b>Why Choose Us?</b><br/>
•       Performance Optimized: We develop websites that load quickly, ensuring an engaging user experience and better SEO performance.<br/>
•       Security First: Our web development practices prioritize security, incorporating SSL encryption, secure coding standards, and frequent updates.<br/>
•       SEO Ready: From the structure to the content, we ensure that your website is search engine optimized, giving you a head start in reaching your target audience.<br/>
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
