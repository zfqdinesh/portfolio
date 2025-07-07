import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Settings, Shield, Zap, Database, Terminal, GitBranch } from 'lucide-react';

const DevOps: React.FC = () => {
  const devopsSkills = [
    {
      category: 'Containerization',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Docker', level: 90, description: 'Container creation, multi-stage builds, Docker Compose' },
        { name: 'Kubernetes', level: 75, description: 'Pod management, services, deployments, ingress' },
        { name: 'Docker Swarm', level: 70, description: 'Container orchestration and cluster management' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'AWS', level: 85, description: 'EC2, S3, Lambda, RDS, CloudFormation, ECS' },
        { name: 'Azure', level: 65, description: 'Virtual Machines, Storage, Functions, DevOps' },
        { name: 'Google Cloud', level: 60, description: 'Compute Engine, Cloud Storage, Cloud Functions' }
      ],
      color: 'from-green-500 to-teal'
    },
    {
      category: 'CI/CD & Automation',
      icon: <GitBranch className="w-8 h-8" />,
      skills: [
        { name: 'Jenkins', level: 88, description: 'Pipeline creation, automated testing, deployment' },
        { name: 'GitHub Actions', level: 82, description: 'Workflow automation, CI/CD pipelines' },
        { name: 'GitLab CI', level: 75, description: 'Continuous integration and deployment' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Infrastructure as Code',
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: 'Terraform', level: 80, description: 'Infrastructure provisioning, state management' },
        { name: 'Ansible', level: 75, description: 'Configuration management, automation' },
        { name: 'CloudFormation', level: 70, description: 'AWS infrastructure templates' }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Monitoring & Logging',
      icon: <Shield className="w-8 h-8" />,
      skills: [
        { name: 'Prometheus', level: 75, description: 'Metrics collection and alerting' },
        { name: 'Grafana', level: 80, description: 'Data visualization and dashboards' },
        { name: 'ELK Stack', level: 70, description: 'Elasticsearch, Logstash, Kibana' }
      ],
      color: 'from-yellow-500 to-gold'
    },
    {
      category: 'Operating Systems',
      icon: <Terminal className="w-8 h-8" />,
      skills: [
        { name: 'Linux', level: 90, description: 'Ubuntu, CentOS, system administration' },
        { name: 'Bash Scripting', level: 85, description: 'Automation scripts, system management' },
        { name: 'Windows Server', level: 65, description: 'PowerShell, IIS, Active Directory' }
      ],
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const projects = [
    {
      title: 'Docker Inside Docker (DIND)',
      description: 'Advanced DevOps project running Docker inside a Docker container for isolated CI/CD pipelines',
      technologies: ['Docker', 'Linux', 'CI/CD', 'Jenkins'],
      highlights: ['Nested containerization', 'Isolated environments', 'Pipeline optimization']
    },
    {
      title: 'Multi-Cloud Infrastructure',
      description: 'Terraform-based infrastructure deployment across AWS, Azure, and GCP',
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP'],
      highlights: ['Cross-cloud deployment', 'Infrastructure automation', 'Cost optimization']
    },
    {
      title: 'Kubernetes Cluster Management',
      description: 'Production-ready Kubernetes cluster with monitoring and auto-scaling',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm'],
      highlights: ['Auto-scaling', 'Health monitoring', 'Zero-downtime deployment']
    }
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
            DevOps & Cloud
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
            Expertise in modern DevOps practices, cloud infrastructure, and automation technologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {devopsSkills.map((category, index) => (
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

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Featured DevOps Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gradient-to-br from-teal/5 to-navy/5 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{project.title}</h3>
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
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-gradient-to-r from-teal/5 to-navy/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-6 text-center">DevOps Certifications & Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span className="font-semibold text-navy dark:text-white">ARTH 5.0 by Vimal Daga Sir</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="font-semibold text-navy dark:text-white">Advanced Docker Containerization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-navy dark:text-white">DevOps Pipeline Mastery</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-navy dark:text-white">AWS Cloud Practitioner (In Progress)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-semibold text-navy dark:text-white">Kubernetes Administration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-navy dark:text-white">Terraform Infrastructure</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOps;