import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeSection from './pages/Home';
import QuotePage from './pages/Quote'; 
import './App.css';
import Footer from './Components/footer';
import Navbar from './Components/Navbar.js';
import Restuarents from './pages/restuarents';
import Food from './Components/Food';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/restuarents" element={<Restuarents />} />
        <Route path="/food" element={<Food />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 