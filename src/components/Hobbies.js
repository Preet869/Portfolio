import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCamera, FaBrain, FaGolfBall } from 'react-icons/fa';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaGamepad className="text-3xl" />,
      title: "Game Development",
      description: "Recently developed a strong interest in game development! I've built my own PC and enjoy gaming on PS5. Excited to explore creating games and learning about game design, programming, and interactive experiences.",
      technologies: ["PC Building", "Game Design", "Programming"],
      projects: [
      ]
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Learning Technology",
      description: "Passionate about exploring cutting-edge technology and geeky innovations. Love diving deep into AI, App Development, and building new things with software.",
      technologies: ["AI/ML", "Raspberry Pi", "Software Development", "Swift", "AWS"],
      projects: [

      ]
    },
    {
      icon: <FaCamera className="text-3xl" />,
      title: "Cinema Photography",
      description: "Capturing cinematic moments and telling stories through photography. I like experimenting with different techniques and creating visually compelling compositions.",
      technologies: ["Drone", "Video Editing"],
      projects: []
    },
    {
      icon: <FaGolfBall className="text-3xl" />,
      title: "Golf",
      description: "Enjoying the strategic and technical aspects of golf. Love the challenge of improving my game and spending time outdoors on the course.",
      technologies: [],
      projects: []
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
              className="bg-terminal-bg border border-terminal-accent/20 p-6 rounded-lg hover:shadow-lg hover:border-primary-500/50 transition-all duration-300"
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
                  
                  {(hobby.technologies.length > 0 || hobby.projects.length > 0) && (
                    <div className="space-y-4">
                      {hobby.technologies.length > 0 && (
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
                      )}
                      
                      {hobby.projects.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-terminal-accent mb-2 uppercase tracking-wide">
                            Interest Areas
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
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hobbies;
