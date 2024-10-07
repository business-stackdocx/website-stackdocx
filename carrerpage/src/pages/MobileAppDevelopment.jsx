import React from 'react'
import web from '../assets/web.jpg';

function MobileAppDevelopment() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
    <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden max-w-full">
      {/* Content Section */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Mobile App
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Mobile App Development Services<br/>
            At STACKDOCX SOLUTIONS PVT LMT, we create feature-rich, user-friendly mobile applications that help businesses engage customers and stay competitive in a mobile-first world. Our team of expert developers specializes in both native and cross-platform app development, ensuring that your app delivers exceptional performance, functionality, and user experience on all devices.
            <br/><br/>
            <strong>Our Mobile App Development Services:</strong><br/>
            <b>1. Native App Development</b> <br/>
            We develop high-performance native apps tailored for specific platforms, such as iOS and Android. By leveraging platform-specific features and technologies, we ensure that your app delivers seamless performance, enhanced security, and a truly native experience.
            <br/><br/>
            <b>2. Cross-Platform App Development</b><br/>
            Maximize reach while minimizing development costs with our cross-platform mobile apps. Using frameworks like React Native and Flutter, we create apps that work seamlessly across both iOS and Android devices, allowing you to launch faster and manage a single codebase.
            <br/><br/>
            <b>3. Custom Mobile App Solutions</b><br/>
            Whether you need a social media app, an e-commerce platform, or an enterprise-grade mobile solution, we design and develop custom apps that align with your business goals. From ideation to deployment, we handle every aspect of app creation with a focus on innovation and usability.
            <br/><br/>
            <b>4. UI/UX Design</b><br/>
            Our mobile app design team creates intuitive, visually stunning interfaces that ensure a delightful user experience. We prioritize responsive, user-friendly designs that are optimized for usability and engagement, ensuring your app stands out in the crowded marketplace.
            <br/><br/>
            <b>5. Mobile App Maintenance & Support</b><br/>
            Our services don’t stop at deployment. We provide ongoing maintenance and support to ensure your app remains up-to-date, secure, and optimized for new devices and operating system updates. From bug fixes to feature enhancements, we keep your app running smoothly.
            <br/><br/>
            <b>6. Mobile App Testing & QA</b><br/>
            We offer comprehensive testing and quality assurance to ensure your app works flawlessly across all devices and environments. Our rigorous testing process covers usability, performance, security, and compatibility to deliver a high-quality, bug-free app experience.
            <br/><br/>
            <b>7. App Store Deployment & Optimization</b><br/>
            We handle the entire app submission process for both Google Play and Apple App Store, ensuring that your app meets all guidelines and is fully optimized for visibility. From metadata to screenshots, we help optimize your app listing for maximum downloads and engagement.
            <br/><br/>
            <strong>Why Choose Us?</strong><br/>
            • <b>Tailored Solutions:</b> Whether it’s a startup idea or an enterprise-grade app, we tailor our development process to meet your specific business needs.<br/>
            • <b>Agile Development:</b> We follow agile methodologies, ensuring transparency, faster iterations, and high-quality deliverables at every stage of development.<br/>
            •<b> Performance Optimized:</b> Our apps are built to be fast, responsive, and scalable, providing a seamless experience no matter how complex the app is or how many users it serves.<br/>
            •<b> End-to-End Development: </b>From conceptualization to post-launch support, we offer a complete mobile app development lifecycle, ensuring your app evolves as your business grows.<br/>
            <br/>
            <strong>Industries We Serve:</strong><br/>
            • <b>E-commerce:</b> Secure, fast-loading mobile apps for online shopping and transactions.<br/>
            •<b> Healthcare:</b> Apps for telemedicine, patient monitoring, and healthcare analytics.<br/>
            • <b>Finance:</b> Mobile banking, payment apps, and investment platforms with robust security.<br/>
            • <b>Logistics:</b> Mobile solutions for fleet management, real-time tracking, and inventory control.<br/>
          </p>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3">
        <img 
          className="w-full h-full object-cover" 
          src={web}
        />
      </div>
    </div>
  </div>
  )
}

export default MobileAppDevelopment