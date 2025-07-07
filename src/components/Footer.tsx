import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/dineshajmera', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/dineshajmera', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/dineshajmera', label: 'Instagram' }
  ];

  return (
    <footer className="bg-navy dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold">Dinesh Ajmera</div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-teal hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="flex items-center gap-2 text-gray-300 mb-2">
              © 2025 Dinesh Ajmera | Built with <Heart className="w-4 h-4 text-red-500" /> using React & TypeScript
            </p>
            <p className="text-sm text-gray-400">
              Crafted with modern web technologies and a passion for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;