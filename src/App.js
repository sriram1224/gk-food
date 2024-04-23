import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeSection from './pages/Home';
import QuotePage from './pages/Quote'; 
import './App.css';
import Footer from './Components/footer';
import Food from './pages/Food';
import Navbar from './Components/Navbar.js';
import Restuarents from './pages/restuarents';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/quote" element={<QuotePage />} />
        
        <Route path="/restuarents" element={<Restuarents />} />
        <Route path="/food" element={<Food />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 