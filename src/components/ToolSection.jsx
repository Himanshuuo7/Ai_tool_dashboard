import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FeatureList from './FeatureList';
import AnimatedButton from './AnimatedButton';
import { ExternalLink } from 'lucide-react';

const ToolSection = ({ tool, index }) => {
  const isEven = index % 2 === 0;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className={`h-screen w-full flex items-center justify-center relative overflow-hidden section-container`}
      data-section={tool.id}
    >
      <div className={`container mx-auto px-8 md:px-16 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24 h-full`}>
        
        {/* LEFT/RIGHT TEXT AREA */}
        <div className="flex-1 z-10">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF2E2E] mb-2 block">
              0{index + 1} // AI TOOL
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 inline-block hover:text-[#FF2E2E] transition-colors cursor-default">
              {tool.title}
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/60 max-w-lg mb-4 italic">
              {tool.tagline}
            </p>
            <p className="text-lg font-light text-white/40 max-w-lg leading-relaxed">
              {tool.description}
            </p>
            
            <FeatureList features={tool.features} />
            
            <AnimatedButton 
              className="mt-4"
              onClick={() => window.open(tool.link, '_blank')}
              variant={isEven ? "primary" : "secondary"}
            >
              <span className="flex items-center gap-2">
                Launch Experience <ExternalLink className="w-4 h-4" />
              </span>
            </AnimatedButton>
          </motion.div>
        </div>

        {/* RIGHT/LEFT VISUAL AREA */}
        <div className="flex-1 w-full h-full relative hidden md:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -10 : 10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: isEven ? -10 : 10 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative w-full aspect-square max-w-md"
          >
            {/* Abstract visual blob / UI illusion */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-[#FF2E2E]/20 to-transparent' : 'from-white/10 to-transparent'} rounded-3xl blur-3xl`} />
            <div className="absolute inset-0 border border-white/10 rounded-3xl glass-dark backdrop-blur-xl overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl md:text-6xl font-black text-white/5 uppercase select-none"
              >
                {tool.title}
              </motion.div>
              
              {/* Floating glow bits */}
              <motion.div 
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-12 h-12 bg-[#FF2E2E] rounded-full blur-[40px] opacity-30"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ToolSection;
