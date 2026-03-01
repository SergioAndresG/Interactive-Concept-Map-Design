import { motion } from 'motion/react';

interface CurvedArrowProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  color: string;
  label?: string;
  delay?: number;
}

export function CurvedArrow({ start, end, color, label, delay = 0 }: CurvedArrowProps) {
  // Calculate control point for quadratic bezier curve
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  // Offset for curve
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const offset = Math.min(distance * 0.2, 50);
  
  // Perpendicular offset for curve
  const controlX = midX - (dy / distance) * offset;
  const controlY = midY + (dx / distance) * offset;

  const path = `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;

  // Calculate label position (on the curve)
  const labelX = (start.x + 2 * controlX + end.x) / 4;
  const labelY = (start.y + 2 * controlY + end.y) / 4;

  return (
    <g>
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 0.9, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        markerEnd="url(#arrowhead)"
      />
      {label && (
        <motion.text
          x={labelX}
          y={labelY}
          fill="white"
          fontSize="11"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="pointer-events-none"
        >
          {label}
        </motion.text>
      )}
    </g>
  );
}
