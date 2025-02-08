import React, { useRef, useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { CostComparison } from './components/sections/CostComparison';
import { Solution } from './components/sections/Solution';
import { CaseStudy } from './components/sections/CaseStudy';
import { Features2 } from './components/sections/Features2';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { ExpertInsights } from './components/sections/ExpertInsights';
import { AudioSamples } from './components/sections/AudioSamples';
import { useCustomCursor } from './hooks/useCustomCursor';

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useCustomCursor(cursorRef);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: (e.clientX / window.innerWidth) * 2 - 1, y: 0 });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-space" onMouseMove={handleMouseMove}>
      <div className="custom-cursor" ref={cursorRef} />
      <Header />
      <Hero mouseX={mousePos.x} />
      <CostComparison />
      <ExpertInsights />
      <Solution />
      <AudioSamples />
      <CaseStudy />
      <Features2 />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}