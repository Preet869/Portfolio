import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/preet-dhillon-09b174270/",
      color: "hover:text-blue-600",
      username: "@Preet Dhillon"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/Preet869",
      color: "hover:text-gray-400",
      username: "@Preet869"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:preet_231@icloud.com",
      color: "hover:text-green-400",
      username: "@preet***@icloud.com"
    }
  ];

  return (
    <section id="contact" className="py-12 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-terminal-text/80 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-terminal-bg border border-terminal-accent/20 p-6 rounded-lg shadow-lg hover:border-primary-500/50 transition-all duration-300"
          >
              <h3 className="text-2xl font-bold text-terminal-text mb-6">Follow Me</h3>
              
              <div className="space-y-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-terminal-accent/10 transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 border border-primary-500/30">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-terminal-text">{social.name}</h4>
                      <p className="text-terminal-text/60 text-sm">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="bg-terminal-bg border border-primary-500/30 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-terminal-text text-xl">Available for Opportunities</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;