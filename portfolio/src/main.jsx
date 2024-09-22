import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import ApplicationDevPg1 from './pages/ApplicationDevPg1'; // Adjust paths
import AiMl from './pages/AiMl';
import Automation2 from './pages/Automation2';
import WebDevelopment from './pages/WebDevelopment'; // Example: Import individual service components
import AIMLDevelopment from './pages/AIMLDevelopment'
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import DataEngineering from './pages/DataEngineering';
import QualityAssurance from './pages/QualityAssurance';
import AutomationTesting from './pages/AutomationTesting';





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
    <Routes>
    
      <Route path="/" element={<App />} />
      <Route path="/AiMl" element={<AiMl />} />
      <Route path="/ApplicationDevPg1" element={<ApplicationDevPg1 />} />
      <Route path="/Automation2" element={<Automation2 />} />
      <Route path="/WebDevelopment" element={<WebDevelopment />} />
      <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
      <Route path="/DataEngineering" element={<DataEngineering />} />
      <Route path="/QualityAssurance" element={<QualityAssurance />} />
      <Route path="/AutomationTesting" element={<AutomationTesting />} />
      <Route path="AIMLDevelopment" element={<AIMLDevelopment/>}/>
    </Routes>
        
  </Router>
   
  </StrictMode>,
)
