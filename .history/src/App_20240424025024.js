import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeSection from './pages/Home';
import QuotePage from './pages/Quote'; 
import './App.css';
import Footer from './Components/footer';
import FoodRecipes from './Components/Food.js';
import FoodDetail from './Components/FoodDetail';
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
        <Route path="/food" exact component={FoodRecipes} />
        <Route path="/food/:id" component={FoodDetail} />
        <Route path="/restuarents" element={<Restuarents />} />
        
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 