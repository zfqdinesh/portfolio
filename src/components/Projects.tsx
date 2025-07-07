import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Pocket as Docker, Bot, Cloud, Code, Star, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Docker Inside Docker (DIND)',
      description: 'Advanced DevOps project running Docker inside a Docker container for isolated CI/CD pipelines and development environments.',
      tech: ['Docker', 'Linux', 'DevOps', 'CI/CD'],
      icon: <Docker className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'WhatsApp Automation Suite',
      description: 'Python-based automation tool using Selenium for bulk WhatsApp messaging from Excel data with advanced web scraping capabilities.',
      tech: ['Python', 'Selenium', 'Excel', 'Web Scraping'],
      icon: <Bot className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Audio Transcriber',
      description: 'Serverless application that uploads audio files to S3 and converts them to text using AWS Lambda and Transcribe services.',
      tech: ['AWS', 'Lambda', 'S3', 'Transcribe', 'Python'],
      icon: <Cloud className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GenAI Code Generator',
      description: 'Intelligent code generation tool powered by Gemini API that creates HTML/JavaScript frontend code from natural language descriptions.',
      tech: ['GenAI', 'Gemini API', 'JavaScript', 'HTML/CSS'],
      icon: <Code className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-20 text-teal/5 dark:text-teal/5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <GitBranch size={80} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-teal mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(0, 173, 181, 0.2)"
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
            >
              {/* Image container with overlay effects */}
              <div className="h-48 relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  whileHover={{ opacity: 60 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Floating project icon */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>

                {/* Animated stars */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/30"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${20 + i * 10}%`,
                    }}
                  >
                    <Star size={12} />
                  </motion.div>
                ))}
              </div>

              <div className="p-6 relative">
                <div className="flex items-center mb-3">
                  <motion.div
                    className="text-teal mr-3"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-navy dark:text-white"
                    whileHover={{ color: "#00ADB5" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#00ADB5",
                        color: "white"
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button 
                    className="flex items-center gap-2 px-4 py-2 bg-teal text-white rounded-lg font-medium relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0, 173, 181, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal to-navy opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <Github size={16} className="relative z-10" />
                    <span className="relative z-10">Code</span>
                  </motion.button>

                  <motion.button 
                    className="flex items-center gap-2 px-4 py-2 border border-teal text-teal rounded-lg font-medium relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#00ADB5",
                      color: "white",
                      borderColor: "#00ADB5"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.button>
                </div>

                {/* Floating particles */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-teal/30 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                    style={{
                      right: `${10 + i * 30}px`,
                      bottom: '20px',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;