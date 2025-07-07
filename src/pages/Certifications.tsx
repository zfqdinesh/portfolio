import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, ExternalLink, Star, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const achievements = [
    {
      title: 'ARTH 5.0 by Vimal Daga Sir',
      description: 'Advanced course in DevOps, Cloud Computing, and Modern Technology Stack',
      status: 'Completed',
      year: '2024',
      issuer: 'LinuxWorld Informatics',
      category: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Jenkins'],
      credentialId: 'ARTH-2024-001',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'DevOps Pipeline Mastery',
      description: 'End-to-end CI/CD pipeline implementation and automation',
      status: 'Completed',
      year: '2024',
      issuer: 'Tech Academy',
      category: 'DevOps',
      skills: ['Jenkins', 'GitLab CI', 'Docker', 'Terraform'],
      credentialId: 'DPM-2024-002',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Advanced Docker Containerization',
      description: 'Docker containers, orchestration, and advanced Docker concepts',
      status: 'Completed',
      year: '2024',
      issuer: 'Container Institute',
      category: 'Containerization',
      skills: ['Docker', 'Docker Compose', 'Swarm', 'Multi-stage builds'],
      credentialId: 'ADC-2024-003',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cloud Architecture Fundamentals',
      description: 'AWS services, cloud deployment, and infrastructure management',
      status: 'In Progress',
      year: '2024',
      issuer: 'Amazon Web Services',
      category: 'Cloud Computing',
      skills: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
      credentialId: 'CAF-2024-004',
      image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Machine Learning Fundamentals',
      description: 'Python-based machine learning algorithms and data science',
      status: 'Completed',
      year: '2024',
      issuer: 'Data Science Institute',
      category: 'Machine Learning',
      skills: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      credentialId: 'MLF-2024-005',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Full Stack Web Development',
      description: 'MERN stack development with modern best practices',
      status: 'Completed',
      year: '2024',
      issuer: 'Web Dev Academy',
      category: 'Web Development',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'],
      credentialId: 'FSWD-2024-006',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'DevOps', 'Cloud Computing', 'Machine Learning', 'Web Development', 'Containerization'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const stats = [
    { number: achievements.length, label: 'Total Certifications', icon: Trophy },
    { number: achievements.filter(a => a.status === 'Completed').length, label: 'Completed', icon: CheckCircle },
    { number: achievements.filter(a => a.status === 'In Progress').length, label: 'In Progress', icon: Calendar },
    { number: categories.length - 1, label: 'Categories', icon: Star },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-navy dark:text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Certifications & Achievements
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-teal mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional certifications and achievements that validate my expertise across various technology domains.
          </motion.p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className="text-teal mb-3 flex justify-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon size={32} />
              </motion.div>
              <motion.div 
                className="text-3xl font-bold text-navy dark:text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-teal text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-teal/10 hover:text-teal'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          key={selectedCategory}
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Header */}
              <div className="h-48 relative overflow-hidden">
                <motion.img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    achievement.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-600 backdrop-blur-sm' 
                      : 'bg-yellow-500/20 text-yellow-600 backdrop-blur-sm'
                  }`}>
                    {achievement.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    {achievement.category}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-white font-bold text-lg">{achievement.year}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-teal">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-bold text-navy dark:text-white mb-2"
                      whileHover={{ color: "#00ADB5" }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.title}
                    </motion.h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{achievement.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{achievement.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-teal/10 text-teal rounded text-xs font-medium"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#00ADB5",
                          color: "white"
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {achievement.credentialId}
                  </div>
                  <motion.button
                    className="flex items-center gap-2 text-teal hover:text-navy dark:hover:text-white transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    Verify
                  </motion.button>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <CheckCircle className={`w-4 h-4 ${achievement.status === 'Completed' ? 'text-green-500' : 'text-gold'}`} />
                  <span className={`text-sm font-medium ${achievement.status === 'Completed' ? 'text-green-500' : 'text-gold'}`}>
                    {achievement.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-teal/5 to-navy/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-6 text-center">Continuous Learning Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4">Current Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">AWS Solutions Architect</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Kubernetes Administrator (CKA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Google Cloud Professional</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4">Upcoming Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Terraform Associate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Azure DevOps Engineer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Machine Learning Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;