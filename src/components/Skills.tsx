import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, Brain, Zap, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'Bash', 'TypeScript'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Terraform', 'Linux'],
      color: 'from-green-500 to-teal'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      skills: ['HTML/CSS', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'Express.js'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      skills: ['scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'TensorFlow'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'GenAI',
      skills: ['OpenAI API', 'Gemini API', 'LangChain', 'Prompt Engineering'],
      color: 'from-yellow-500 to-gold'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background CPU icon */}
      <motion.div
        className="absolute top-20 left-10 text-teal/5 dark:text-teal/5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Cpu size={120} />
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
            Skills & Technologies
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 173, 181, 0.2)"
              }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={false}
              />

              <div className="flex items-center mb-4 relative z-10">
                <motion.div 
                  className="text-teal mr-3"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    color: "#FFD60A"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-navy dark:text-white"
                  whileHover={{ color: "#00ADB5" }}
                  transition={{ duration: 0.3 }}
                >
                  {category.title}
                </motion.h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#00ADB5",
                      color: "white",
                      boxShadow: "0 5px 15px rgba(0, 173, 181, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: skillIndex * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Floating skill indicators */}
              {Array.from({ length: 2 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-teal/20 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    right: `${10 + i * 20}px`,
                    top: '10px',
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;