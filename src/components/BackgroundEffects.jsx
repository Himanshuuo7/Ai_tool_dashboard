import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Glow Orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF2E2E] rounded-full blur-[150px] opacity-30"
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF2E2E] rounded-full blur-[180px] opacity-20"
      />

      {/* Noise Texture Overaly (CSS class handles SVG) */}
      <div className="noise" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0A] opacity-60" />
    </div>
  );
};

export default BackgroundEffects;
