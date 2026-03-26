import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center glass-dark">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-black tracking-tighter"
      >
        AI <span className="text-[#FF2E2E]">ECOSYSTEM</span>
      </motion.div>
      
      <div className="flex gap-8 items-center list-none">
        {['Features', 'Tools', 'Vision'].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-xs uppercase tracking-[0.2em] font-medium cursor-pointer hover:text-[#FF2E2E] transition-colors"
          >
            {item}
          </motion.li>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:border-[#FF2E2E] transition-colors"
      >
        <div className="w-2 h-2 bg-[#FF2E2E] rounded-full animate-pulse" />
      </motion.div>
    </nav>
  );
};

export default Navbar;
