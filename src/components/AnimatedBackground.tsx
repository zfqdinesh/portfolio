import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, Brain, Zap, Cpu, Terminal, Database, Cloud } from 'lucide-react';

const AnimatedBackground: React.FC = () => {
  // Tech icons for floating background
  const techIcons = [
    { icon: Code, position: { top: '15%', left: '10%' }, delay: 0 },
    { icon: Server, position: { top: '25%', right: '15%' }, delay: 2 },
    { icon: Terminal, position: { top: '45%', left: '5%' }, delay: 4 },
    { icon: Database, position: { top: '65%', right: '10%' }, delay: 6 },
    { icon: Cloud, position: { top: '75%', left: '20%' }, delay: 8 },
    { icon: Cpu, position: { top: '35%', right: '25%' }, delay: 10 },
    { icon: Globe, position: { top: '55%', left: '15%' }, delay: 12 },
    { icon: Brain, position: { top: '85%', right: '20%' }, delay: 14 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-teal/10 to-navy/10 rounded-full blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-gold/5 to-teal/5 rounded-full blur-2xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '60%', right: '10%' }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-r from-navy/10 to-gold/10 rounded-full blur-xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '20%', left: '20%' }}
      />

      {/* Floating Tech Icons */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-teal/10 dark:text-teal/5"
          style={item.position}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(index) * 20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.icon size={60 + index * 5} />
        </motion.div>
      ))}

      {/* Docker Icon - Special floating animation */}
      <motion.div
        className="absolute text-blue-500/10 dark:text-blue-400/5"
        style={{ top: '20%', left: '25%' }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Server size={80} />
      </motion.div>

      {/* Python Icon - Special floating animation */}
      <motion.div
        className="absolute text-yellow-500/10 dark:text-yellow-400/5"
        style={{ top: '70%', right: '30%' }}
        animate={{
          y: [0, -35, 0],
          x: [0, 25, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code size={75} />
      </motion.div>

      {/* Linux Icon - Special floating animation */}
      <motion.div
        className="absolute text-green-500/10 dark:text-green-400/5"
        style={{ top: '50%', left: '35%' }}
        animate={{
          y: [0, -25, 0],
          x: [0, -20, 0],
          rotate: [0, 270, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Terminal size={70} />
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-teal rounded-sm"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-teal/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Code symbols floating */}
      {['</', '/>', '{}', '[]', '()', '&&', '||', '=>'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-teal/5 dark:text-teal/3 font-mono text-2xl font-bold"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;