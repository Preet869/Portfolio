import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaTerminal } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      'Full Stack Engineer',
      'React Developer',
      'Python Developer',
      'AI Solutions Developer',
      'Problem Solver',
      'Code Enthusiast'
    ];

    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-terminal-bg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-terminal-text leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-primary-500 glow-effect">Preet Dhillon</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl lg:text-4xl font-semibold text-terminal-accent min-h-[3rem] flex items-center"
              >
                <span className="code-font">{displayText}</span>
                <span className="typing-cursor ml-1"></span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-terminal-text/80 max-w-2xl"
              >
                Passionate about creating innovative web solutions and building scalable applications 
                that make a difference. I specialize in modern web technologies and love turning 
                complex problems into simple, beautiful solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-primary-500 text-terminal-bg px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-200 flex items-center justify-center gap-2 terminal-glow"
              >
                Get In Touch
                <FaEnvelope />
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-terminal-bg transition-all duration-200 flex items-center justify-center gap-2 glow-effect"
              >
                Download Resume
                <FaDownload />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-6"
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-terminal-text/60 hover:text-primary-500 transition-colors duration-200"
              >
                <FaGithub size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-terminal-text/60 hover:text-primary-500 transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-terminal-text/60 hover:text-primary-500 transition-colors duration-200"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Terminal Window */}
              <div className="terminal-window w-96 h-80 p-6">
                {/* Terminal Header */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-terminal-error rounded-full"></div>
                    <div className="w-3 h-3 bg-terminal-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-terminal-success rounded-full"></div>
                  </div>
                  <div className="ml-4 text-terminal-text/60 text-sm code-font">
                    preetdhillon@portfolio:~$
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="space-y-2 text-sm code-font">
                  <div className="text-terminal-accent">
                    <span className="text-syntax-keyword">const</span> developer = <span className="text-syntax-string">'Preet'</span>;
                  </div>
                  <div className="text-terminal-accent">
                    <span className="text-syntax-keyword">const</span> skills = [<span className="text-syntax-string">'React'</span>, <span className="text-syntax-string">'Node.js'</span>, <span className="text-syntax-string">'Python'</span>];
                  </div>
                  <div className="text-terminal-accent">
                    <span className="text-syntax-keyword">const</span> passion = <span className="text-syntax-string">'Building amazing web apps'</span>;
                  </div>
                  <div className="text-terminal-accent">
                    <span className="text-syntax-keyword">function</span> <span className="text-syntax-function">solveProblems</span>() {'{'}
                  </div>
                  <div className="text-terminal-accent ml-4">
                    <span className="text-syntax-keyword">return</span> <span className="text-syntax-string">'Elegant solutions'</span>;
                  </div>
                  <div className="text-terminal-accent">{'}'}</div>
                  <div className="text-terminal-accent">
                    <span className="text-syntax-comment">{'// Ready to code the future!'}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-terminal-accent">preetdhillon@portfolio:~$</span>
                    <span className="typing-cursor ml-1"></span>
                  </div>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
              >
                <FaCode className="text-primary-500" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-terminal-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
              >
                <FaTerminal className="text-terminal-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
