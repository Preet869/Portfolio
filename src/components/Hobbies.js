import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCode, FaPalette, FaMusic } from 'react-icons/fa';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaGamepad className="text-3xl" />,
      title: "Game Development",
      description: "Creating interactive games using Unity, Unreal Engine, and web technologies. Love building immersive experiences and exploring game mechanics.",
      technologies: ["Unity", "C#", "Unreal Engine", "JavaScript", "Three.js"],
      projects: [
        "2D Platformer Game",
        "3D Adventure Game", 
        "Web-based Puzzle Game",
        "Mobile Game Prototype"
      ]
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Open Source",
      description: "Contributing to open source projects and building tools that help the developer community. Always excited to collaborate and learn.",
      technologies: ["Git", "GitHub", "Documentation", "Community"],
      projects: [
        "React Component Library",
        "Developer Tools",
        "API Documentation",
        "Bug Fixes & Features"
      ]
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Digital Art",
      description: "Creating digital artwork and UI/UX designs. Love experimenting with different art styles and bringing creative ideas to life.",
      technologies: ["Photoshop", "Figma", "Blender", "Procreate"],
      projects: [
        "Character Design",
        "UI/UX Mockups",
        "3D Modeling",
        "Digital Illustrations"
      ]
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Music Production",
      description: "Composing electronic music and sound effects for games and applications. Enjoy creating ambient soundscapes and catchy melodies.",
      technologies: ["Ableton Live", "FL Studio", "Logic Pro", "Audacity"],
      projects: [
        "Game Soundtracks",
        "Ambient Music",
        "Sound Effects",
        "Podcast Intros"
      ]
    }
  ];

  return (
    <section id="hobbies" className="py-12 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">Hobbies & Interests</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto glow-effect"></div>
          <p className="text-xl text-terminal-text/80 max-w-2xl mx-auto mt-6">
            When I'm not coding, I love exploring creative outlets and learning new skills. 
            These hobbies help me think differently and bring fresh perspectives to my development work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-terminal-bg border border-terminal-accent/20 p-6 rounded-lg hover:shadow-lg hover:border-primary-500/50 transition-all duration-300 glow-effect"
            >
              <div className="flex items-start gap-6">
                <div className="text-primary-500 flex-shrink-0">
                  {hobby.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-terminal-text mb-3">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-terminal-text/80 mb-6 leading-relaxed">
                    {hobby.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary-500 mb-2 uppercase tracking-wide">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {hobby.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-terminal-accent mb-2 uppercase tracking-wide">
                        Recent Projects
                      </h4>
                      <ul className="space-y-1">
                        {hobby.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="text-terminal-text/70 text-sm flex items-center gap-2">
                            <span className="text-primary-500">•</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-terminal-bg border border-terminal-accent/20 p-8 rounded-lg glow-effect">
            <h3 className="text-2xl font-bold text-terminal-text mb-4">
              Let's Create Something Amazing Together!
            </h3>
            <p className="text-terminal-text/80 mb-6 max-w-2xl mx-auto">
              Whether it's building a web application, developing a game, or working on creative projects, 
              I'm always excited to collaborate and bring ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-500 text-terminal-bg px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-200 terminal-glow"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
