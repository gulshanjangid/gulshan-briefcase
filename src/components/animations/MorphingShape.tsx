
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MorphingShape = () => {
  const [currentPath, setCurrentPath] = useState(0);
  
  const paths = [
    "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z",
    "M12,2L13.09,8.26L22,9L13.09,15.74L12,22L10.91,15.74L2,9L10.91,8.26L12,2Z",
    "M12,2L15.09,8.26L22,9L17,14L18.18,21L12,17.77L5.82,21L7,14L2,9L8.91,8.26L12,2Z",
    "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % paths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 right-20 w-16 h-16 pointer-events-none z-10">
      <svg width="64" height="64" viewBox="0 0 24 24" className="w-full h-full">
        <motion.path
          d={paths[currentPath]}
          fill="url(#morphGradient)"
          initial={false}
          animate={{ d: paths[currentPath] }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 212, 255)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(255, 0, 150)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MorphingShape;
