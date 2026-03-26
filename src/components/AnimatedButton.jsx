import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className = "", variant = "primary" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull distance
    const distance = 40;
    x.set((clientX - centerX) / 2);
    y.set((clientY - centerY) / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const btnClasses = variant === "primary" 
    ? "bg-[#FF2E2E] text-white" 
    : "border border-white hover:bg-white hover:text-black transition-colors";

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm relative group overflow-hidden ${btnClasses} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
      )}
    </motion.button>
  );
};

export default AnimatedButton;
