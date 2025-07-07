import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, FolderOpen, Phone, Code, Zap, Rocket, Server, Terminal, Database, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingIcons = [
    { icon: Code, delay: 0, position: { top: '20%', left: '5%' } },
    { icon: Zap, delay: 2, position: { top: '60%', left: '8%' } },
    { icon: Rocket, delay: 4, position: { top: '40%', right: '5%' } },
  ];

  // Tech icons for rotating around profile
  const rotatingTechIcons = [
    { icon: Server, color: 'text-blue-500', size: 24, radius: 180, speed: 20 }, // Docker
    { icon: Code, color: 'text-yellow-500', size: 22, radius: 200, speed: 25 }, // Python
    { icon: Terminal, color: 'text-green-500', size: 20, radius: 160, speed: 30 }, // Linux
    { icon: Database, color: 'text-purple-500', size: 18, radius: 220, speed: 15 }, // Database
    { icon: Cpu, color: 'text-red-500', size: 20, radius: 140, speed: 35 }, // CPU
    { icon: Globe, color: 'text-teal', size: 22, radius: 240, speed: 18 }, // Web
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-navy pt-20 relative overflow-hidden">
      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-teal/20 dark:text-teal/10"
          style={item.position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.icon size={48} />
        </motion.div>
      ))}

      {/* Large floating Docker icon */}
      <motion.div
        className="absolute top-32 right-20 text-blue-500/10 dark:text-blue-400/5"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Server size={100} />
      </motion.div>

      {/* Large floating Python icon */}
      <motion.div
        className="absolute bottom-32 left-20 text-yellow-500/10 dark:text-yellow-400/5"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code size={90} />
      </motion.div>

      {/* Large floating Linux icon */}
      <motion.div
        className="absolute top-1/2 left-10 text-green-500/10 dark:text-green-400/5"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Terminal size={85} />
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-navy dark:text-white relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-r from-navy via-teal to-navy dark:from-white dark:via-teal dark:to-white bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  Dinesh Ajmera
                </motion.span>
                <motion.span
                  className="absolute -right-2 top-0 w-1 h-full bg-teal"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scaleY: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
                variants={itemVariants}
              >
                <motion.span 
                  className="text-teal inline-block"
                  whileHover={{ scale: 1.05, color: "#FFD60A" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Engineering Student
                </motion.span>
                <span> | </span>
                <motion.span 
                  className="text-teal inline-block"
                  whileHover={{ scale: 1.05, color: "#FFD60A" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  DevOps & Cloud Enthusiast
                </motion.span>
                <span> | </span>
                <motion.span 
                  className="text-teal inline-block"
                  whileHover={{ scale: 1.05, color: "#FFD60A" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ML & GenAI Explorer
                </motion.span>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                I love building real-world tech that solves real problems.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="flex items-center gap-2 px-6 py-3 bg-teal text-white rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 173, 181, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal to-navy opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="buttonBg"
                />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>

              <motion.button 
                className="flex items-center gap-2 px-6 py-3 bg-gold text-navy rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 214, 10, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold to-teal opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <Phone size={20} className="relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </motion.button>

              <motion.button 
                className="flex items-center gap-2 px-6 py-3 border-2 border-teal text-teal dark:text-teal rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#00ADB5",
                  color: "white",
                  borderColor: "#00ADB5"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FolderOpen size={20} />
                View Projects
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-teal to-navy rounded-full overflow-hidden shadow-2xl relative"
                animate={{
                  boxShadow: [
                    "0 25px 50px rgba(0, 173, 181, 0.3)",
                    "0 25px 50px rgba(10, 25, 49, 0.3)",
                    "0 25px 50px rgba(0, 173, 181, 0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dinesh Ajmera"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-teal/20 to-navy/20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Ray convergence indicator */}
                <motion.div
                  className="absolute inset-0 border-4 border-teal/30 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                    borderColor: ["rgba(0, 173, 181, 0.3)", "rgba(255, 214, 10, 0.5)", "rgba(0, 173, 181, 0.3)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Rotating Tech Icons around profile */}
              {rotatingTechIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${tech.color} drop-shadow-lg`}
                  style={{
                    width: tech.radius * 2,
                    height: tech.radius * 2,
                    left: '50%',
                    top: '50%',
                    marginLeft: -tech.radius,
                    marginTop: -tech.radius,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: tech.speed,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    className="absolute bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50 dark:border-gray-600/50"
                    style={{
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      backgroundColor: "rgba(0, 173, 181, 0.1)"
                    }}
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <tech.icon size={tech.size} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Original orbiting elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute w-4 h-4 bg-teal rounded-full -top-2 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute w-3 h-3 bg-gold rounded-full top-1/2 -right-2 transform -translate-y-1/2"></div>
                <div className="absolute w-4 h-4 bg-navy dark:bg-white rounded-full -bottom-2 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute w-3 h-3 bg-teal rounded-full top-1/2 -left-2 transform -translate-y-1/2"></div>
              </motion.div>

              {/* Pulsing tech rings */}
              <motion.div
                className="absolute inset-0 border-2 border-teal/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transform: 'scale(1.2)' }}
              />

              <motion.div
                className="absolute inset-0 border-2 border-gold/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{ transform: 'scale(1.4)' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;