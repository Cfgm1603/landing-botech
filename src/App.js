import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Tutorials } from "./pages/Tutorials";

export default function App() {
  return (
    <Router>
      <div 
        className="min-h-screen"
        style={{
          background: `linear-gradient(to bottom right, #ffffff, rgba(var(--color-primary-botech-rgb), 0.05), rgba(var(--color-primary-botech-rgb), 0.15))`
        }}
      >
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca-de" element={<About />} />
          <Route path="/contactanos" element={<Contact />} />
          <Route path="/tutoriales" element={<Tutorials />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
