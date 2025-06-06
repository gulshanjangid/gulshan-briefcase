
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor3D = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, [role="button"], .cursor-hover'
    );

    window.addEventListener('mousemove', moveCursor);
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
      >
        <div className="relative w-full h-full">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-2 border-white rounded-full"
            animate={{
              rotate: 360,
              scale: isHovering ? 1.2 : 1,
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 0.2 },
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: isHovering ? 0.5 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Trailing particles */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [0, 1, 0],
              x: [0, -20, -40],
              y: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [0, 1, 0],
              x: [0, 15, 30],
              y: [0, Math.random() * 15 - 7, Math.random() * 30 - 15],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.2,
            }}
          />
        </div>
      </motion.div>

      {/* Cursor trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] opacity-30"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.3, delay: 0.1 },
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm"
          animate={{
            rotate: -360,
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      {/* 3D geometric shapes following cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          x: cursorXSpring.get() - 30,
          y: cursorYSpring.get() - 30,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          className="w-full h-full border border-accent/40 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          x: cursorXSpring.get() + 25,
          y: cursorYSpring.get() + 25,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="w-full h-full bg-mint/30 rounded-full"
          animate={{
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
};

export default Cursor3D;
