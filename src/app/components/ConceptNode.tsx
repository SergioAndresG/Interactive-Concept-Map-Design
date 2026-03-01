import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ConceptNodeProps {
  children: ReactNode;
  color: 'cyan' | 'green' | 'amber' | 'red';
  style?: React.CSSProperties;
  className?: string;
  glow?: boolean;
  warning?: boolean;
}

export function ConceptNode({ 
  children, 
  color, 
  style, 
  className = '',
  glow = false,
  warning = false
}: ConceptNodeProps) {
  const colorClasses = {
    cyan: 'border-[#00C2FF]',
    green: 'border-[#00E5A0]',
    amber: 'border-[#FFB547]',
    red: 'border-[#FF6B6B]'
  };

  const glowClasses = {
    cyan: 'shadow-[0_0_20px_rgba(0,194,255,0.5)]',
    green: 'shadow-[0_0_20px_rgba(0,229,160,0.5)]',
    amber: 'shadow-[0_0_20px_rgba(255,181,71,0.5)]',
    red: 'shadow-[0_0_20px_rgba(255,107,107,0.5)]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-[#0D1B2A]/80 backdrop-blur-sm
        border-2 ${colorClasses[color]}
        rounded-2xl p-4
        ${glow ? glowClasses[color] : 'shadow-lg'}
        ${warning ? 'border-dashed' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </motion.div>
  );
}
