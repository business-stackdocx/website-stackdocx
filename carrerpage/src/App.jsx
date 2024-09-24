import React from 'react';
import Card from './Card';
import CareerForm from './CareerForm';
import ContactForm from './ContactForm';
import FeaturedJobs from './FeaturedJobs';
import Services from './Services'
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
const App = () => {
  const navigate = useNavigate();
  return (
    <div>
<NavBar/>
      <Home/>
    <Services/> 
    <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center flex justify-center items-center text-black">
        <FontAwesomeIcon icon={faChartLine} className="text-black-600 mr-3 text-4xl" />
        <span className="text-black">
          Case Studies
        </span>
      </h1>
    <div className="flex flex-wrap justify-center gap-6 p-6">
    
    <Card
        imageSrc="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg"
        title="Mobile App & Web Application Developed"
        description="Mobile App & Web Application Developed for your Businesses."
        onClick={() => navigate('/ApplicationDevPg1')} // Updated route
      />
      <Card
        imageSrc="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="A.I. Solutions"
        description="Artificial intelligence (AI) business solutions are technologies that use AI to help businesses solve problems and improve decision-making."
        onClick={() => navigate('/AiMl')} // Updated route
      />
      <Card
        imageSrc="https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Automation Platform"
        description="Automation Platform for your Businesses."
        onClick={() => navigate('/Automation2')} // Updated route
      />

      
    

    </div>
    <ContactForm/>
    <FeaturedJobs/>
    <CareerForm/>
    <Footer/>
    </div>
  );
};

export default App;
