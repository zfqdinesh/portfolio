import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Database, Smartphone, Palette, Zap } from 'lucide-react';

const WebDev: React.FC = () => {
  const webSkills = [
    {
      category: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 90, description: 'Hooks, Context API, Redux, Next.js' },
        { name: 'TypeScript', level: 85, description: 'Type safety, interfaces, generics' },
        { name: 'Tailwind CSS', level: 88, description: 'Utility-first CSS, responsive design' },
        { name: 'Framer Motion', level: 80, description: 'Animations and micro-interactions' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 85, description: 'Express.js, middleware, authentication' },
        { name: 'Python', level: 88, description: 'Flask, FastAPI, Django basics' },
        { name: 'REST APIs', level: 90, description: 'RESTful design, API documentation' },
        { name: 'GraphQL', level: 70, description: 'Query language, Apollo Server' }
      ],
      color: 'from-green-500 to-teal'
    },
    {
      category: 'Database Management',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL, aggregation, indexing' },
        { name: 'PostgreSQL', level: 75, description: 'Relational database, complex queries' },
        { name: 'Redis', level: 70, description: 'Caching, session management' },
        { name: 'Supabase', level: 80, description: 'Backend-as-a-Service, real-time' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      features: ['User authentication', 'Payment processing', 'Order management', 'Admin panel'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat app with rooms, file sharing, and emoji reactions',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Cloudinary'],
      features: ['Real-time messaging', 'File uploads', 'Chat rooms', 'User presence'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Kanban-style project management tool with drag-and-drop functionality',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'DnD Kit'],
      features: ['Drag & drop', 'Team collaboration', 'Progress tracking', 'Notifications'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const tools = [
    { name: 'VS Code', category: 'Editor', icon: '💻' },
    { name: 'Git & GitHub', category: 'Version Control', icon: '🔧' },
    { name: 'Postman', category: 'API Testing', icon: '📡' },
    { name: 'Figma', category: 'Design', icon: '🎨' },
    { name: 'Vercel', category: 'Deployment', icon: '🚀' },
    { name: 'Netlify', category: 'Hosting', icon: '🌐' }
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
            Web Development
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
            Full-stack web development expertise with modern frameworks and best practices.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {webSkills.map((category, index) => (
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
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Featured Web Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                
                <div className="p-6">
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
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="bg-gradient-to-r from-teal/5 to-navy/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Development Tools</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h3 className="font-semibold text-navy dark:text-white text-sm">{tool.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDev;