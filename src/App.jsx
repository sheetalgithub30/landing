import { useState, Suspense } from 'react'
// import Home from "./pages/home/index.jsx"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // NPM: React Router Dom for routing.

import TermsAndConditions from './pages/termsAndCondition/index.jsx';
import Homepage from './pages/homePage/index.jsx'
import PrivacyPolicy from './pages/privacyPolicy/index.jsx';

function App() {


  return (
    <Router>

    <Routes>
      <Route path ="/" element ={<Homepage/>}/>
      <Route path="/terms-and-conditions" element={ <TermsAndConditions />} />
      <Route path="/privacy-policy" element={ <PrivacyPolicy />} />
    </Routes>
  </Router>
  )
}

export default App
