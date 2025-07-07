import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageCircle, Zap } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'dinesh.ajmera@example.com',
      link: 'mailto:dinesh.ajmera@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 8824438704',
      link: 'tel:+918824438704',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/dineshajmera',
      link: 'https://github.com/dineshajmera',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dineshajmera',
      link: 'https://linkedin.com/in/dineshajmera',
      color: 'from-blue-600 to-blue-800'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 text-teal/5 dark:text-teal/5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <MessageCircle size={100} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-gold/10 dark:text-gold/5"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap size={80} />
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
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-teal mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      boxShadow: "0 10px 25px rgba(0, 173, 181, 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      initial={false}
                    />

                    <motion.div 
                      className="text-teal relative z-10"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        color: "#FFD60A"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="relative z-10">
                      <motion.div 
                        className="font-semibold text-navy dark:text-white"
                        whileHover={{ color: "#00ADB5" }}
                        transition={{ duration: 0.3 }}
                      >
                        {info.label}
                      </motion.div>
                      <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                    </div>

                    {/* Floating indicator */}
                    <motion.div
                      className="absolute right-4 w-2 h-2 bg-teal/30 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form background with animated gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal/5 to-navy/5 rounded-xl"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(0, 173, 181, 0.05) 0%, rgba(10, 25, 49, 0.05) 100%)",
                  "linear-gradient(135deg, rgba(10, 25, 49, 0.05) 0%, rgba(0, 173, 181, 0.05) 100%)",
                  "linear-gradient(135deg, rgba(0, 173, 181, 0.05) 0%, rgba(10, 25, 49, 0.05) 100%)"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10 p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0, 173, 181, 0.2)"
                  }}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0, 173, 181, 0.2)"
                  }}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 resize-none"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0, 173, 181, 0.2)"
                  }}
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 173, 181, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <Send size={20} />
                </motion.div>
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;