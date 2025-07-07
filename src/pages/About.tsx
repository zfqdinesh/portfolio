import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Code2, Sparkles, Rocket, Star, Zap } from 'lucide-react';

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

  const cards = [
    {
      icon: Code2,
      title: "Who I Am",
      description: "I'm an engineering student passionate about modern technology. Currently diving deep into DevOps, Python, MERN stack, Machine Learning, Cloud Computing, and GenAI to build innovative solutions.",
      gradient: "from-blue-500/10 to-teal/10",
      stats: "3+ Years Learning"
    },
    {
      icon: Target,
      title: "My Goal",
      description: "To become a skilled DevOps Engineer or AI Innovator who can bridge the gap between development and operations, creating efficient, scalable, and intelligent systems.",
      gradient: "from-teal/10 to-green-500/10",
      stats: "Future Ready"
    },
    {
      icon: Heart,
      title: "What Drives Me",
      description: "I love building real-world tech that solves real problems. Every project I work on is an opportunity to learn something new and make a meaningful impact.",
      gradient: "from-pink-500/10 to-red-500/10",
      stats: "Problem Solver"
    }
  ];

  const achievements = [
    { number: "15+", label: "Projects Completed", icon: Rocket },
    { number: "5+", label: "Technologies Mastered", icon: Star },
    { number: "100%", label: "Passion for Learning", icon: Zap },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden min-h-screen">
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
            About Me
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
            Passionate engineering student on a mission to revolutionize technology through DevOps, AI, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center p-6 bg-gradient-to-br from-teal/5 to-navy/5 rounded-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-teal mb-4 flex justify-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon size={40} />
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-navy dark:text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                className="relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <card.icon className="w-12 h-12 text-teal mb-4" />
              </motion.div>

              <motion.h3 
                className="text-xl font-bold text-navy dark:text-white mb-4 relative z-10"
                whileHover={{ color: "#00ADB5" }}
                transition={{ duration: 0.3 }}
              >
                {card.title}
              </motion.h3>

              <motion.p 
                className="text-gray-600 dark:text-gray-300 relative z-10 mb-4"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {card.description}
              </motion.p>

              <motion.div
                className="text-sm font-semibold text-teal relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                {card.stats}
              </motion.div>

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

        {/* Personal Journey Section */}
        <motion.div
          className="bg-gradient-to-r from-teal/5 to-navy/5 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            My Journey
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From a curious engineering student to a passionate technologist, my journey has been driven by an insatiable appetite for learning and innovation. 
            I believe in the power of technology to transform lives and solve complex problems. Every line of code I write, every system I design, 
            and every problem I solve brings me closer to my goal of becoming a leader in the tech industry.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;