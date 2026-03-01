import { motion } from 'motion/react';

interface StepNodeProps {
  number: string;
  text: string;
  color: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function StepNode({ number, text, color, style, delay = 0 }: StepNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05, x: 5 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-start gap-3 bg-[#0D1B2A]/60 backdrop-blur-sm 
                 border border-white/10 rounded-xl p-3 shadow-md
                 hover:border-white/30 transition-colors"
      style={style}
    >
      <div
        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
        style={{ backgroundColor: color, color: '#0D1B2A' }}
      >
        {number}
      </div>
      <p className="text-white text-sm leading-relaxed pt-0.5">{text}</p>
    </motion.div>
  );
}
