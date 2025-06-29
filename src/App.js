import React from 'react';
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ImageDashboard } from "./components/ImageDashboard";
import { Footer } from "./components/Footer";
import { CompanySection } from "./components/CompanySection";
import { ClientsSection } from "./components/ClientsSection";
import { useWindowSize } from './hooks/useWindowSize';

export default function App() {
  const { width } = useWindowSize();
  
  // Configuración responsive para las cards
  const getCardConfig = () => {
    if (width < 768) {
      return {
        width: 280,
        height: 210,
        cardDistance: 35,
        verticalDistance: 45,
      };
    } else if (width < 1024) {
      return {
        width: 350,
        height: 260,
        cardDistance: 50,
        verticalDistance: 60,
      };
    } else {
      return {
        width: 400,
        height: 300,
        cardDistance: 50,
        verticalDistance: 60,
      };
    }
  };

  const cardConfig = getCardConfig();

  return (
    <div 
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, #ffffff, rgba(var(--color-primary-botech-rgb), 0.05), rgba(var(--color-primary-botech-rgb), 0.15))`
      }}
    >
      <Navbar />
      <Hero />
      <ImageDashboard />
      <CompanySection width={width} cardConfig={cardConfig} />
      <ClientsSection />
      <Footer />
    </div>
  );
}
