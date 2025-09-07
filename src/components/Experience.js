import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Pixquid",
      period: "June 2025 - Present",
      location: "Remote",
      description: [
        "Developed and deployed full-stack features for a cloud-native streaming platform using React, Supabase, AWS, Stripe contributing to both frontend UI and backend infrastructure",
        "Owned Supabase Edge Functions and Stripe integration, maintaining 99% uptime with zero payment or function failures, by implementing secure Deno-based serverless workflows",
        "Accelerated feature delivery by 25% in a fast-paced startup environment, taking ownership of critical features and rapidly adapting to a modern tech stack",
        "Architected an AI-powered movie recommendation engine using Supabase, AWS, and LLMs, analyzing behavioral signals (views, clicks, rewatch patterns) to generate scene-level personalized suggestions",
        "Implemented robust software design principles across full-stack project (React, Supabase, AWS), enabling modularity and maintainability that reduced onboarding time for new developers by 30% and improved code review efficiency by 40%"
      ],
      technologies: ["React", "Supabase", "AWS", "Stripe", "Deno", "LLMs", "Serverless"]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-terminal-accent/30"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-terminal-bg border border-terminal-accent/20 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-terminal-text mb-2 md:mb-0">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-terminal-text/60">
                      <div className="flex items-center gap-1">
                        <FaCalendar />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary-500 mb-4">
                    {experience.company}
                  </h4>
                  
                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span className="text-terminal-text/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
