import React from 'react';
import './WebCSS.css';
import Navbar from './navbar';
import Headeritem from './headeritem';
import Footer from './footer';
import { Route, Routes } from 'react-router-dom';
import FeaturePage from './featurepage';
import PublicationPage from './publicationpage';
import VitaePage from './vitaepage';
import ProjectPage from './projectpage';
import HomePage from './homepage';

function App() {
  return (
    <div class="page-container">
    <div class="header-container">
    <Headeritem />
    <Navbar />
    </div>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/features" element={<FeaturePage/>} />
      <Route path="/publications" element={<PublicationPage/>} />
      <Route path="/vitae" element={<VitaePage/>} />
      <Route path="/projects" element={<ProjectPage/>} />
    </Routes>
    <Footer />
    </div>
    
  );
}

export default App;
