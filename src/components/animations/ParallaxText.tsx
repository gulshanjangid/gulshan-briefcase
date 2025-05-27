
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxTextProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxText = ({ children, speed = 0.5, className = '' }: ParallaxTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y, opacity }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
