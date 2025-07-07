import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSkillsDropdownOpen, setIsSkillsDropdownOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      path: '/skills', 
      label: 'Skills',
      hasDropdown: true,
      dropdownItems: [
        { path: '/devops', label: 'DevOps & Cloud' },
        { path: '/webdev', label: 'Web Development' },
        { path: '/ml', label: 'Machine Learning' },
        { path: '/genai', label: 'GenAI' },
      ]
    },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-navy dark:text-white hover:text-teal transition-colors">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-navy via-teal to-navy dark:from-white dark:via-teal dark:to-white bg-clip-text text-transparent"
            >
              Dinesh Ajmera
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsSkillsDropdownOpen(true)}
                    onMouseLeave={() => setIsSkillsDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.path) || item.dropdownItems?.some(dropItem => isActive(dropItem.path))
                          ? 'text-teal bg-teal/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-teal dark:hover:text-teal hover:bg-teal/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${isSkillsDropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {isSkillsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                        >
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.path}
                              to={dropItem.path}
                              className={`block px-4 py-3 text-sm transition-colors ${
                                isActive(dropItem.path)
                                  ? 'text-teal bg-teal/10'
                                  : 'text-gray-700 dark:text-gray-300 hover:text-teal hover:bg-teal/5'
                              }`}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-teal bg-teal/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal dark:hover:text-teal hover:bg-teal/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-teal bg-teal/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-teal hover:bg-teal/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            to={dropItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                              isActive(dropItem.path)
                                ? 'text-teal bg-teal/10'
                                : 'text-gray-600 dark:text-gray-400 hover:text-teal hover:bg-teal/5'
                            }`}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;