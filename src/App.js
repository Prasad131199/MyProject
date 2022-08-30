import React from 'react';
import About from './About'
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
