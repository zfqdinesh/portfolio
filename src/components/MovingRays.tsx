import React from 'react';
import { motion } from 'framer-motion';

const MovingRays: React.FC = () => {
  // Calculate the approximate position of the profile picture
  const profileCenter = { x: 75, y: 50 }; // Percentage from left and top

  // Ray configurations - starting from different sections
  const rays = [
    // From About section (left side)
    { startX: 10, startY: 80, delay: 0, color: 'from-teal/30', duration: 4 },
    { startX: 5, startY: 85, delay: 0.5, color: 'from-blue-500/20', duration: 4.5 },
    
    // From Skills section (bottom)
    { startX: 30, startY: 95, delay: 1, color: 'from-gold/25', duration: 3.5 },
    { startX: 50, startY: 98, delay: 1.5, color: 'from-green-500/20', duration: 4 },
    { startX: 70, startY: 95, delay: 2, color: 'from-purple-500/20', duration: 3.8 },
    
    // From Projects section (right side)
    { startX: 95, startY: 70, delay: 2.5, color: 'from-teal/25', duration: 4.2 },
    { startX: 98, startY: 60, delay: 3, color: 'from-orange-500/20', duration: 3.7 },
    
    // From Contact section (bottom right)
    { startX: 90, startY: 90, delay: 3.5, color: 'from-pink-500/20', duration: 4.1 },
    { startX: 85, startY: 95, delay: 4, color: 'from-cyan-500/25', duration: 3.9 },
    
    // From Header (top)
    { startX: 20, startY: 5, delay: 4.5, color: 'from-navy/30', duration: 4.3 },
    { startX: 80, startY: 8, delay: 5, color: 'from-teal/20', duration: 4.4 },
    
    // From Footer (bottom)
    { startX: 15, startY: 98, delay: 5.5, color: 'from-gold/20', duration: 4.6 },
    { startX: 60, startY: 100, delay: 6, color: 'from-blue-600/20', duration: 4.2 },
    
    // Additional rays from corners
    { startX: 2, startY: 2, delay: 6.5, color: 'from-red-500/15', duration: 5 },
    { startX: 98, startY: 2, delay: 7, color: 'from-green-600/15', duration: 5.2 },
    { startX: 2, startY: 98, delay: 7.5, color: 'from-purple-600/15', duration: 4.8 },
    { startX: 98, startY: 98, delay: 8, color: 'from-yellow-600/15', duration: 5.1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {rays.map((ray, index) => {
        // Calculate angle and distance
        const deltaX = profileCenter.x - ray.startX;
        const deltaY = profileCenter.y - ray.startY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return (
          <motion.div
            key={index}
            className={`absolute w-1 bg-gradient-to-r ${ray.color} to-transparent opacity-0`}
            style={{
              left: `${ray.startX}%`,
              top: `${ray.startY}%`,
              height: `${distance * 1.2}vh`,
              transformOrigin: 'top center',
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0.4, 0],
              scaleY: [0, 1, 1, 0],
              scaleX: [0.5, 1, 0.8, 0],
            }}
            transition={{
              duration: ray.duration,
              repeat: Infinity,
              delay: ray.delay,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />
        );
      })}

      {/* Pulsing rays - shorter, more frequent */}
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * 30) + Math.random() * 15; // Spread around circle
        const startDistance = 40 + Math.random() * 20; // Random start distance
        const startX = profileCenter.x + Math.cos(angle * Math.PI / 180) * startDistance;
        const startY = profileCenter.y + Math.sin(angle * Math.PI / 180) * startDistance;

        return (
          <motion.div
            key={`pulse-${index}`}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-teal/40 to-transparent opacity-0"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              transformOrigin: 'bottom center',
              transform: `rotate(${angle + 180}deg)`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
              scaleX: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeOut",
              repeatDelay: 1,
            }}
          />
        );
      })}

      {/* Energy particles moving towards profile */}
      {Array.from({ length: 8 }).map((_, index) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        return (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-teal/60 rounded-full"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              x: [`0%`, `${(profileCenter.x - startX) * 1.2}vw`],
              y: [`0%`, `${(profileCenter.y - startY) * 1.2}vh`],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut",
              repeatDelay: 3,
            }}
          />
        );
      })}

      {/* Spiral rays */}
      {Array.from({ length: 6 }).map((_, index) => {
        const spiralAngle = index * 60;
        
        return (
          <motion.div
            key={`spiral-${index}`}
            className="absolute w-0.5 h-32 bg-gradient-to-b from-gold/30 to-transparent opacity-0"
            style={{
              left: `${profileCenter.x}%`,
              top: `${profileCenter.y}%`,
              transformOrigin: 'bottom center',
            }}
            animate={{
              rotate: [spiralAngle, spiralAngle + 360],
              opacity: [0, 0.6, 0.3, 0],
              scaleY: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "linear",
              repeatDelay: 2,
            }}
          />
        );
      })}

      {/* Convergence effect at profile picture */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-teal/20 blur-sm"
        style={{
          left: `${profileCenter.x}%`,
          top: `${profileCenter.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ripple effect at profile center */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`ripple-${index}`}
          className="absolute border border-teal/20 rounded-full"
          style={{
            left: `${profileCenter.x}%`,
            top: `${profileCenter.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            width: [0, 200, 400],
            height: [0, 200, 400],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default MovingRays;