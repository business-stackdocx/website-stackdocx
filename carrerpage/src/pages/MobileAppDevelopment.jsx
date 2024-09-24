import React from 'react'

function MobileAppDevelopment() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
    <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden max-w-full">
      {/* Content Section */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Mobile App
        </h2>
        <p className="text-black text-lg">
      
        

        Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices.

        Like web application development, mobile application development has its roots in more traditional software development. One critical difference, however, is that mobile apps are often written specifically to take advantage of the unique features of a particular mobile device. For example, a gaming app might be written to take advantage of the iPhone's accelerometer or a mobile health app might be written to take advantage of a smartwatch's temperature sensor.
        </p>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3">
        <img 
          className="w-full h-full object-cover" 
          src="https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png
"
        />
      </div>
    </div>
  </div>
  )
}

export default MobileAppDevelopment