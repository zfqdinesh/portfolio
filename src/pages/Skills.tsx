import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Server, Globe, Brain, Zap, Cpu, ArrowRight, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      description: 'Infrastructure automation, containerization, and cloud services',
      skills: ['Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Terraform', 'Linux'],
      color: 'from-green-500 to-teal',
      link: '/devops',
      level: 'Advanced'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks and technologies',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'Tailwind'],
      color: 'from-orange-500 to-red-500',
      link: '/webdev',
      level: 'Intermediate'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Data science, predictive modeling, and intelligent systems',
      skills: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'TensorFlow'],
      color: 'from-pink-500 to-rose-500',
      link: '/ml',
      level: 'Intermediate'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'GenAI & LLMs',
      description: 'Generative AI, language models, and intelligent automation',
      skills: ['OpenAI API', 'Gemini API', 'LangChain', 'Prompt Engineering', 'RAG', 'Vector DBs'],
      color: 'from-yellow-500 to-gold',
      link: '/genai',
      level: 'Advanced'
    }
  ];

  const programmingLanguages = [
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 85, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { name: 'Bash', level: 75, color: 'bg-green-500' },
    { name: 'SQL', level: 70, color: 'bg-purple-500' },
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden min-h-screen">
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

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-navy dark:text-white mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills & Technologies
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-teal mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore my technical expertise across different domains. Click on any category to dive deeper into specific technologies.
          </motion.p>
        </motion.div>

        {/* Programming Languages Progress */}
        <motion.div
          className="mb-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-8 text-center">Programming Languages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{lang.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${lang.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
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
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={false}
              />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="text-teal"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      color: "#FFD60A"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-navy dark:text-white"
                      whileHover={{ color: "#00ADB5" }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.title}
                    </motion.h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-4 h-4 text-gold" />
                      <span className="text-sm font-medium text-gold">{category.level}</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {category.description}
              </motion.p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {category.skills.slice(0, 4).map((skill, skillIndex) => (
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
                {category.skills.length > 4 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                    +{category.skills.length - 4} more
                  </span>
                )}
              </div>

              <Link to={category.link}>
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 bg-teal text-white rounded-lg font-semibold w-full justify-center relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0, 173, 181, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal to-navy opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative z-10">Explore {category.title}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative z-10"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </Link>

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