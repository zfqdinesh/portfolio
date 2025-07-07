import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart, Eye, TrendingUp, Database, Cpu } from 'lucide-react';

const MachineLearning: React.FC = () => {
  const mlSkills = [
    {
      category: 'Data Science Libraries',
      icon: <BarChart className="w-8 h-8" />,
      skills: [
        { name: 'Pandas', level: 85, description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 88, description: 'Numerical computing and arrays' },
        { name: 'Matplotlib', level: 80, description: 'Data visualization and plotting' },
        { name: 'Seaborn', level: 75, description: 'Statistical data visualization' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: 'scikit-learn', level: 85, description: 'Classification, regression, clustering' },
        { name: 'TensorFlow', level: 70, description: 'Deep learning and neural networks' },
        { name: 'Keras', level: 75, description: 'High-level neural network API' },
        { name: 'XGBoost', level: 65, description: 'Gradient boosting framework' }
      ],
      color: 'from-green-500 to-teal'
    },
    {
      category: 'Computer Vision',
      icon: <Eye className="w-8 h-8" />,
      skills: [
        { name: 'OpenCV', level: 80, description: 'Image processing and computer vision' },
        { name: 'PIL/Pillow', level: 85, description: 'Image manipulation library' },
        { name: 'YOLO', level: 65, description: 'Object detection algorithms' },
        { name: 'MediaPipe', level: 60, description: 'Real-time perception pipelines' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const projects = [
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning model for sales forecasting with interactive visualizations',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'Plotly', 'Streamlit'],
      features: ['Time series forecasting', 'Interactive charts', 'Model comparison', 'Real-time updates'],
      accuracy: '94%',
      type: 'Regression'
    },
    {
      title: 'Image Classification System',
      description: 'CNN-based image classifier for medical diagnosis assistance',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Flask', 'NumPy'],
      features: ['Deep learning', 'Image preprocessing', 'Model deployment', 'API integration'],
      accuracy: '91%',
      type: 'Classification'
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Unsupervised learning for customer behavior analysis and segmentation',
      technologies: ['Python', 'K-Means', 'PCA', 'Matplotlib', 'Seaborn'],
      features: ['Clustering analysis', 'Dimensionality reduction', 'Data visualization', 'Business insights'],
      accuracy: '87%',
      type: 'Clustering'
    }
  ];

  const algorithms = [
    { name: 'Linear Regression', category: 'Regression', proficiency: 90 },
    { name: 'Random Forest', category: 'Ensemble', proficiency: 85 },
    { name: 'SVM', category: 'Classification', proficiency: 80 },
    { name: 'K-Means', category: 'Clustering', proficiency: 85 },
    { name: 'Neural Networks', category: 'Deep Learning', proficiency: 75 },
    { name: 'Decision Trees', category: 'Tree-based', proficiency: 88 }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden min-h-screen">
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
            Machine Learning
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
            Data science and machine learning expertise for intelligent solutions and predictive analytics.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mlSkills.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="text-teal"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-navy dark:text-white">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-teal font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-teal to-navy"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Algorithms Proficiency */}
        <motion.div
          className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Algorithm Proficiency</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {algorithms.map((algorithm, index) => (
              <motion.div
                key={algorithm.name}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="font-semibold text-navy dark:text-white">{algorithm.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{algorithm.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-teal to-navy"
                      initial={{ width: 0 }}
                      animate={{ width: `${algorithm.proficiency}%` }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-teal">{algorithm.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Featured ML Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gradient-to-br from-teal/5 to-navy/5 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy dark:text-white">{project.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal">{project.accuracy}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{project.type}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-1">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          className="bg-gradient-to-r from-teal/5 to-navy/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-6 text-center">Current Learning Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4">Advanced Topics</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-teal" />
                  <span className="text-gray-700 dark:text-gray-300">Deep Learning with PyTorch</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-teal" />
                  <span className="text-gray-700 dark:text-gray-300">MLOps and Model Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-teal" />
                  <span className="text-gray-700 dark:text-gray-300">Reinforcement Learning</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4">Upcoming Projects</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Natural Language Processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Time Series Forecasting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Computer Vision Applications</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MachineLearning;