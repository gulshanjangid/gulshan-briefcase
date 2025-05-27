
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D = ({ children, className = '', intensity = 15 }: Card3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * intensity;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
    
    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          boxShadow: isHovered 
            ? `${rotateY * 2}px ${-rotateX * 2}px 50px rgba(0, 212, 255, 0.3)`
            : '0px 0px 0px rgba(0, 212, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(${rotateY + 45}deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 150, 0.1))`,
        }}
      />
    </motion.div>
  );
};

export default Card3D;
