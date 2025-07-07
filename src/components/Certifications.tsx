import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const achievements = [
    {
      title: 'ARTH 5.0 by Vimal Daga Sir',
      description: 'Advanced course in DevOps, Cloud Computing, and Modern Technology Stack',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'DevOps Pipeline Mastery',
      description: 'End-to-end CI/CD pipeline implementation and automation',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Advanced Docker Containerization',
      description: 'Docker containers, orchestration, and advanced Docker concepts',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Cloud Architecture Fundamentals',
      description: 'AWS services, cloud deployment, and infrastructure management',
      status: 'In Progress',
      year: '2024'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-teal">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy dark:text-white">{achievement.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${achievement.status === 'Completed' ? 'text-green-500' : 'text-gold'}`} />
                    <span className={`text-sm font-medium ${achievement.status === 'Completed' ? 'text-green-500' : 'text-gold'}`}>
                      {achievement.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;