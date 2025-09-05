import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {

  const projects = [
    {
      title: "AI-Powered Research Assistant",
      description: "Delivered an AI-powered academic research assistant leveraging GPT-4 with prompt engineering and retrieval-augmented generation (RAG) to compare articles, extract key insights, and guide students in essay writing. Built a dynamic comparison dashboard using GPT-4 to highlight differences in tone, claims, evidence, and writing style across sources. Implemented smart keyword tracking and timeline-based follow-ups with progress animations to boost user engagement and relevance to coursework.",
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=AI+Research",
      technologies: ["React", "Python", "GPT-4", "RAG", "Prompt Engineering"],
      github: "https://github.com/yourusername/ai-research-assistant",
      live: "https://ai-research-demo.com",
      featured: true,
      period: "July 2025 - August 2025"
    },
    {
      title: "Movie Recommender",
      description: "Architected a personalized movie recommender system using Supabase, AWS, Flask, and GPT APIs, leveraging prompt engineering for dynamic, user-specific recommendations. Improved UI response times by 20% by optimizing React state management and implementing on-demand loading with the TMDB API. Built and tested secure Flask RESTful endpoints that handled hundreds of simulated requests with 0% authentication failures, ensuring reliable backend functionality.",
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Movie+Rec",
      technologies: ["Python", "Flask", "React", "Supabase", "AWS", "GPT APIs", "TMDB API"],
      github: "https://github.com/yourusername/movie-recommender",
      live: "https://movie-recommender-demo.com",
      featured: true,
      period: "June 2025 - July 2025"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 glow-effect"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-terminal-bg border border-terminal-accent/20 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 glow-effect"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-terminal-bg px-3 py-1 rounded-full text-sm font-medium glow-effect">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-terminal-text mb-2">
                  {project.title}
                </h3>
                
                {project.period && (
                  <p className="text-primary-500 text-sm font-medium mb-3">
                    {project.period}
                  </p>
                )}
                
                <p className="text-terminal-text/80 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-500/20 text-primary-500 rounded text-xs font-medium border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-terminal-text/60 hover:text-primary-500 transition-colors duration-200"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-terminal-text/60 hover:text-primary-500 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            <FaGithub />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
