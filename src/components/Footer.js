import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-bg border-t border-terminal-accent/20 text-terminal-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary-500">
              Preet Dhillon
            </h3>
            <p className="text-terminal-text/80">
              Full Stack Engineer passionate about creating innovative web solutions 
              and building scalable applications that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-terminal-text">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Hobbies', href: '#hobbies' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-terminal-text/80 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-terminal-text">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:preetinder.dhillon@example.com"
                className="flex items-center gap-2 text-terminal-text/80 hover:text-primary-500 transition-colors duration-200"
              >
                <FaEnvelope />
                <span>preetinder.dhillon@example.com</span>
              </a>
            </div>
            
            <div className="flex gap-4 pt-2">
              <motion.a
                href="https://github.com/Preet869"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-terminal-text/80 hover:text-primary-500 transition-colors duration-200"
              >
                <FaGithub size={20} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/preet-dhillon-09b174270/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-terminal-text/80 hover:text-primary-500 transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-terminal-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-terminal-text/80 text-sm">
            © {currentYear} Preet Dhillon. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-terminal-text/80 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

