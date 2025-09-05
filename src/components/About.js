import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend development with modern technologies."
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Scalable Solutions",
      description: "Building robust and scalable applications that grow with your business needs."
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant, user-friendly solutions."
    },
    {
      icon: <FaUser className="text-3xl" />,
      title: "User-Centric Design",
      description: "Creating intuitive experiences that users love to interact with."
    }
  ];

  return (
    <section id="about" className="py-12 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto glow-effect"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold text-terminal-text">
              Passionate Full Stack Engineer
            </h3>
            
            <p className="text-lg text-terminal-text/80 leading-relaxed">
              I'm a dedicated Full Stack Engineer with a passion for creating innovative web solutions. 
              With expertise in modern web technologies, I specialize in building scalable applications 
              that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg text-terminal-text/80 leading-relaxed">
              My journey in software development has equipped me with a deep understanding of both 
              frontend and backend technologies. I love working with React, Node.js, and cloud 
              platforms to create robust, performant applications.
            </p>
            
            <p className="text-lg text-terminal-text/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous learning 
              and staying up-to-date with the latest industry trends.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 glow-effect">1+</div>
                <div className="text-sm text-terminal-text/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 glow-effect">2+</div>
                <div className="text-sm text-terminal-text/60">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 glow-effect">20+</div>
                <div className="text-sm text-terminal-text/60">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-terminal-bg border border-terminal-accent/20 p-4 rounded-lg hover:shadow-lg hover:border-primary-500/50 transition-all duration-300 glow-effect"
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-terminal-text mb-2">
                  {feature.title}
                </h4>
                <p className="text-terminal-text/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
