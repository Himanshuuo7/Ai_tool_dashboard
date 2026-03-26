import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SectionProgress = ({ totalSections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-container');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[200] flex">
      {/* Top Bar Progress */}
      <motion.div 
        className="absolute top-0 left-0 h-full bg-[#FF2E2E] origin-left"
        style={{ scaleX }}
      />
      
      {/* Side Dot Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[100]">
        {[...Array(totalSections)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: activeSection === i ? 1.5 : 1,
              backgroundColor: activeSection === i ? "#FF2E2E" : "rgba(255,255,255,0.2)"
            }}
            className="w-2 h-2 rounded-full cursor-pointer"
            onClick={() => {
              const sections = document.querySelectorAll('.section-container');
              sections[i].scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionProgress;
