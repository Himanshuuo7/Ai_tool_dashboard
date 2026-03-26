import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FeatureList = ({ features }) => {
  return (
    <ul className="space-y-4 my-8">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          viewport={{ once: false }}
          className="flex items-center gap-3 text-white/80"
        >
          <CheckCircle2 className="w-5 h-5 text-[#FF2E2E]" />
          <span className="text-lg font-light tracking-wide">{feature}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default FeatureList;
