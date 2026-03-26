import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { MousePointer2 } from 'lucide-react';

const HeroSection = ({ onScrollToTools }) => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden section-container" data-section="hero">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[800px] h-[800px] border border-white/10 rounded-full animate-pulse-slow"
        />
      </div>

      <div className="z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.5em] font-medium text-[#FF2E2E] mb-6"
        >
          6 Powerful Tools. One Experience.
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tighter mb-12 glow-text"
        >
          AI TOOL<br /><span className="text-stroke-white text-transparent">ECOSYSTEM</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-12"
        >
          <AnimatedButton onClick={onScrollToTools}>
            Explore Tools
          </AnimatedButton>

          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-[#FF2E2E] to-transparent"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
