import './ApplicationDevPg1.css';

function ApplicationDevPg1(){
    return(
        <>
        <div className="my-12 py-5 mb-6">
            <h1 className="text-center text-4xl font-bold">Application Development</h1>
        </div>

       <div className="flex flex-wrap justify-center items-center gap-5 px-5">
    <div className="max-w-md text-lg leading-relaxed font-sans text-gray-800 px-5 ml-10">
        <p>
            Our expert team specializes in crafting high-performing native and hybrid apps that make a splash in the app store. 
            We bring your ideas to life, ranging from social media to online stores, with exceptional design and functionality. 
            Trust us to create apps that will exceed your expectations!
        </p>
    </div>

    <img 
        src="https://kissflow.com/hs-fs/hubfs/types-of-application-development.png?width=352&name=types-of-application-development.png" 
        alt="No Image" 
        className="w-full max-w-sm rounded-lg mx-auto" 
    />
</div>


        <div className="my-16 text-center">
            <h1 className="text-4xl font-bold">Our Experience & Domain Knowledge</h1>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed mt-8 px-4 text-gray-800 font-sans">
                <p>
                    Create a durable and responsive mobile app with excellent user experience. Use our native development strategy 
                    for optimized advanced features and smooth performance to ensure long-term success. However, if you're looking to 
                    stick to a budget and want to control your costs, we can implement a cross-platform development approach that is easy to 
                    implement and will allow you to reuse code, helping you to save both time and money. At the end of the day, our ultimate goal 
                    is to help you achieve your app development goals in the most efficient and cost effective way possible.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 w-80 text-left">
                <p>Detail oriented design and<br />development</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 w-80 text-left">
                <p>Native and hybrid app<br />development</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 w-80 text-left">
                <p>Performance oriented and<br />lightweight apps</p>
            </div>
            <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 w-80 text-left">
                <p>Scalable and security by design<br />approach</p>
            </div>
        </div>
        </>
    );
}

export default ApplicationDevPg1;
