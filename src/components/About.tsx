import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Code2, Sparkles } from 'lucide-react';

const About: React.FC = () => {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    }
  };

  const cards = [
    {
      icon: Code2,
      title: "Who I Am",
      description: "I'm an engineering student passionate about modern technology. Currently diving deep into DevOps, Python, MERN stack, Machine Learning, Cloud Computing, and GenAI to build innovative solutions.",
      gradient: "from-blue-500/10 to-teal/10"
    },
    {
      icon: Target,
      title: "My Goal",
      description: "To become a skilled DevOps Engineer or AI Innovator who can bridge the gap between development and operations, creating efficient, scalable, and intelligent systems.",
      gradient: "from-teal/10 to-green-500/10"
    },
    {
      icon: Heart,
      title: "What Drives Me",
      description: "I love building real-world tech that solves real problems. Every project I work on is an opportunity to learn something new and make a meaningful impact.",
      gradient: "from-pink-500/10 to-red-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 text-teal/5 dark:text-teal/5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles size={100} />
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-teal mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 173, 181, 0.15)"
              }}
              className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group`}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal/5 to-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              <motion.div
                variants={iconVariants}
                className="relative z-10"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <card.icon className="w-12 h-12 text-teal mb-4" />
                </motion.div>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold text-navy dark:text-white mb-4 relative z-10"
                whileHover={{ color: "#00ADB5" }}
                transition={{ duration: 0.3 }}
              >
                {card.title}
              </motion.h3>

              <motion.p 
                className="text-gray-600 dark:text-gray-300 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {card.description}
              </motion.p>

              {/* Floating particles */}
              {Array.from({ length: 3 }).map((_, i) => (
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
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${20 + i * 30}%`,
                    bottom: '10px',
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;