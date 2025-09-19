import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {

  const projects = [
    {
      title: "AI-Powered Deep Research Assistant",
      type: "Personal Project",
      period: "July 2025 - August 2025",
      technologies: "React, Python",
      description: [
        "Delivered an AI-powered academic research assistant leveraging GPT-4 with prompt engineering and retrieval-augmented generation (RAG) to compare articles, extract key insights, and guide students in essay writing using React.",
        "Built a dynamic comparison dashboard using GPT-4 to highlight differences in tone, claims, evidence, and writing style across sources.",
        "Implemented smart keyword tracking and timeline-based follow-ups with progress animations to boost user engagement and relevance to coursework."
      ],
      github: "https://github.com/Preet869/DeepResearch",
      live: "https://youtu.be/1hDUYkKJPXI"
    },
    {
      title: "Movie Recommender",
      type: "Personal Project", 
      period: "June 2025 - July 2025",
      technologies: "Python, Flask, React",
      description: [
        "Architected a personalized movie recommender system using Supabase, AWS, Flask, and GPT APIs, leveraging prompt engineering for dynamic, user-specific recommendations.",
        "Improved UI response times by 20% by optimizing React state management and implementing on-demand loading with the TMDB API.",
        "Built and tested secure Flask RESTful endpoints that handled hundreds of simulated requests with 0% authentication failures, ensuring reliable backend functionality."
      ],
      github: "https://github.com/Preet869/Movie-Recommender-",
      live: "https://youtu.be/DdhqmoJNuik?si=klaFChBmKCxe1aqh"
    },
    {
      title: 'To-Do List Full Stack',
      type: 'Personal Project',
      period: "March 2025 - April 2025",
      technologies: "React, Spring Boot, RESTful APIs, H2-Database",
      description: [
        "To-Do List A full-stack web application for managing tasks with a modern, card-based interface.",
        "Built with React.js for the frontend and Spring Boot (Java) for the backend, this app allows users to create, edit, delete, and mark tasks as complete, with data persisted in an H2 database.",
      ],
      github: "https://github.com/Preet869/TO-DO-list-Full-Stack",
    },
    {
      title: 'Months',
      type: 'Personal Project',
      period: 'August 2025 - Present',
      technologies: 'Swift',
      description: [
        "Months is a IOS App that allows users to take one photo each month.",
        "The app is desinged to encourage users to creative with their photos each month.",
        "Each photo is saved in the app and the user can view them all in a grid view.",
        "Alowing users to add a caption to each photo."
      ]
    }
  ];

  return (
    <section id="projects" className="py-12 bg-terminal-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">PROJECT</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-terminal-bg border border-terminal-accent/20 rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-terminal-text mb-1">
                    {project.title} - {project.technologies}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-terminal-text/60">
                    <span className="font-medium">{project.type}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{project.period}</span>
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4 mt-2 sm:mt-0">
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
                      <span className="text-sm">Youtube Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                {project.description.map((bullet, bulletIndex) => (
                  <p key={bulletIndex} className="text-terminal-text/80 text-sm leading-relaxed">
                    • {bullet}
                  </p>
                ))}
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
            href="https://github.com/Preet869?tab=repositories"
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
