import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Brain, Sparkles, Bot, Cpu } from 'lucide-react';

const GenAI: React.FC = () => {
  const genaiSkills = [
    {
      category: 'Large Language Models',
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: 'OpenAI GPT', level: 90, description: 'GPT-3.5, GPT-4, API integration' },
        { name: 'Google Gemini', level: 85, description: 'Gemini Pro, multimodal capabilities' },
        { name: 'Claude', level: 80, description: 'Anthropic Claude, conversation AI' },
        { name: 'Llama', level: 70, description: 'Meta Llama, open-source models' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'AI Frameworks & Tools',
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: 'LangChain', level: 85, description: 'Chain of thought, agents, memory' },
        { name: 'Prompt Engineering', level: 90, description: 'Optimization, few-shot learning' },
        { name: 'Vector Databases', level: 75, description: 'Pinecone, Chroma, embeddings' },
        { name: 'Hugging Face', level: 80, description: 'Transformers, model hub' }
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      category: 'AI Applications',
      icon: <Bot className="w-8 h-8" />,
      skills: [
        { name: 'RAG Systems', level: 85, description: 'Retrieval-augmented generation' },
        { name: 'Chatbots', level: 88, description: 'Conversational AI, context management' },
        { name: 'Code Generation', level: 82, description: 'AI-powered development tools' },
        { name: 'Content Creation', level: 85, description: 'Text, image, and video generation' }
      ],
      color: 'from-green-500 to-teal'
    }
  ];

  const projects = [
    {
      title: 'GenAI Code Generator',
      description: 'Intelligent code generation tool powered by Gemini API that creates HTML/JavaScript frontend code from natural language descriptions',
      technologies: ['Gemini API', 'JavaScript', 'HTML/CSS', 'Node.js', 'Express'],
      features: ['Natural language input', 'Code generation', 'Syntax highlighting', 'Live preview'],
      model: 'Gemini Pro',
      accuracy: '92%'
    },
    {
      title: 'Smart Document Assistant',
      description: 'RAG-based document analysis system that answers questions about uploaded documents',
      technologies: ['OpenAI API', 'LangChain', 'Pinecone', 'Python', 'Streamlit'],
      features: ['Document upload', 'Vector search', 'Context-aware answers', 'Citation tracking'],
      model: 'GPT-4',
      accuracy: '89%'
    },
    {
      title: 'AI Content Creator',
      description: 'Multi-modal content generation platform for blogs, social media, and marketing materials',
      technologies: ['OpenAI API', 'DALL-E', 'React', 'Node.js', 'MongoDB'],
      features: ['Text generation', 'Image creation', 'SEO optimization', 'Brand consistency'],
      model: 'GPT-4 + DALL-E',
      accuracy: '94%'
    }
  ];

  const promptTechniques = [
    { name: 'Zero-shot Prompting', description: 'Direct task completion without examples' },
    { name: 'Few-shot Learning', description: 'Learning from minimal examples' },
    { name: 'Chain of Thought', description: 'Step-by-step reasoning process' },
    { name: 'Role-based Prompting', description: 'Assigning specific roles to AI' },
    { name: 'Template Engineering', description: 'Structured prompt templates' },
    { name: 'Context Optimization', description: 'Maximizing context window usage' }
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
            Generative AI
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
            Cutting-edge generative AI and large language model expertise for intelligent automation and creative solutions.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {genaiSkills.map((category, index) => (
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

        {/* Prompt Engineering Techniques */}
        <motion.div
          className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Prompt Engineering Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promptTechniques.map((technique, index) => (
              <motion.div
                key={technique.name}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-navy dark:text-white">{technique.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{technique.description}</p>
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
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8 text-center">Featured GenAI Projects</h2>
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
                    <div className="text-xs text-gray-600 dark:text-gray-400">{project.model}</div>
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

        {/* AI Ethics & Future */}
        <motion.div
          className="bg-gradient-to-r from-teal/5 to-navy/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-6 text-center">AI Ethics & Future Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-teal" />
                Responsible AI Development
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Bias detection and mitigation in AI models</p>
                <p>• Transparent and explainable AI systems</p>
                <p>• Privacy-preserving AI implementations</p>
                <p>• Ethical prompt engineering practices</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-teal" />
                Emerging Technologies
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Multimodal AI (text, image, audio)</p>
                <p>• AI agents and autonomous systems</p>
                <p>• Edge AI and model optimization</p>
                <p>• Custom model fine-tuning</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenAI;