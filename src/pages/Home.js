import React from 'react';
import { Hero } from "../components/Hero";
import { ImageDashboard } from "../components/ImageDashboard";
import { CompanySection } from "../components/CompanySection";
import { ClientsSection } from "../components/ClientsSection";
import { TeamSection } from "../components/TeamSection";
import { useWindowSize } from '../hooks/useWindowSize';

export function Home() {
  const { width } = useWindowSize();
  
  // Configuración responsive para las cards
  const getCardConfig = () => {
    // Mobile – very small devices
    if (width < 576) {
      return {
        width: 320,
        height: 240,
        cardDistance: 45,
        verticalDistance: 55,
      };
    // Mobile – large phones / small tablets (e.g., 576-767)
    } else if (width < 768) {
      const dynamicWidth = Math.min( Math.round(width * 0.85), 380 );
      return {
        width: dynamicWidth,
        height: Math.round(dynamicWidth * 0.75),
        cardDistance: 50,
        verticalDistance: 60,
      };
    // Tablet – 768-1023
    } else if (width < 1024) {
      return {
        width: 420,
        height: 320,
        cardDistance: 60,
        verticalDistance: 70,
      };
    // Small desktop / iPad Pro width (1024-1279)
    } else if (width < 1280) {
      return {
        width: 450,
        height: 340,
        cardDistance: 60,
        verticalDistance: 70,
      };
    // ≥1280 – large desktop
    } else {
      return {
        width: 500,
        height: 380,
        cardDistance: 60,
        verticalDistance: 70,
      };
    }
  };

  const cardConfig = getCardConfig();

  return (
    <>
      <Hero />
      <ClientsSection />
      <ImageDashboard />
      <CompanySection width={width} cardConfig={cardConfig} />
    </>
  );
} 