import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ToolSection from './components/ToolSection';
import BackgroundEffects from './components/BackgroundEffects';
import CursorGlow from './components/CursorGlow';
import SectionProgress from './components/SectionProgress';
import { TOOLS_DATA } from './constants/tools';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Section Snapping with GSAP
    const sections = gsap.utils.toArray('.section-container');
    
    // Optional: Section snapping logic
    // sections.forEach((section, i) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: "top bottom",
    //     end: "bottom top",
    //     snap: {
    //       snapTo: 1,
    //       duration: 0.5,
    //       ease: "power1.inOut"
    //     }
    //   });
    // });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  const scrollToTools = () => {
    const firstTool = document.querySelector('[data-section="vaultchat"]');
    if (firstTool) {
      firstTool.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative bg-[#0A0A0A] text-white selection:bg-[#FF2E2E] selection:text-white">
      <CursorGlow />
      <BackgroundEffects />
      <Navbar />
      <SectionProgress totalSections={TOOLS_DATA.length + 1} />
      
      <main>
        <HeroSection onScrollToTools={scrollToTools} />
        
        {TOOLS_DATA.map((tool, index) => (
          <ToolSection key={tool.id} tool={tool} index={index} />
        ))}
      </main>

      {/* Marquee Strip */}
      <div className="py-20 bg-white/5 border-y border-white/10 marquee-container">
        <div className="marquee-content inline-flex gap-20 text-4xl font-black uppercase tracking-tighter opacity-20 whitespace-nowrap">
          <span>AI • ML • WEB • AUTOMATION • FUTURE</span>
          <span>AI • ML • WEB • AUTOMATION • FUTURE</span>
          <span>AI • ML • WEB • AUTOMATION • FUTURE</span>
          <span>AI • ML • WEB • AUTOMATION • FUTURE</span>
          <span>AI • ML • WEB • AUTOMATION • FUTURE</span>
        </div>
      </div>

      <footer className="py-12 text-center text-white/20 text-[10px] uppercase tracking-[0.4em]">
        &copy; 2024 AI Tool Ecosystem • Built for the Future
      </footer>
    </div>
  );
}

export default App;
