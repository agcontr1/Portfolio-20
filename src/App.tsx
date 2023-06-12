import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from "components/Footer";

// Pages
import AboutMe from "pages/AboutMe";
import Contact from "pages/Contact";
import Portfolio from "pages/Portfolio";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={<AboutMe/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
