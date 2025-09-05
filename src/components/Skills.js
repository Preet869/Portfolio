import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap",
    "Node.js", "Python", "Express.js", "REST APIs", "GraphQL",
    "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes",
    "Git", "CI/CD", "Agile", "Testing", "Supabase", "Stripe", "Deno", "LLMs"
  ];

  return (
    <section id="skills" className="py-12 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto glow-effect"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-terminal-bg border border-terminal-accent/20 p-6 rounded-lg glow-effect">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;