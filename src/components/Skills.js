import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "Java", "SQL", "TypeScript"]
    },
    {
      title: "AI/LLM Tools", 
      skills: ["Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "GPT-4", "OpenAI API"]
    },
    {
      title: "API Integrations",
      skills: ["RESTful APIs", "Stripe"]
    },
    {
      title: "DevOps & Cloud Tools",
      skills: ["AWS", "Git", "GitHub", "Docker", "Postman"]
    },
    {
      title: "Framework",
      skills: ["Flask", "React", "Spring Boot"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "H2", "Supabase"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem-Solving", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-terminal-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-terminal-text mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-terminal-bg border border-terminal-accent/20 rounded-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-lg font-bold text-primary-500">
                  {category.title}:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-primary-500/20 text-primary-500 rounded text-xs font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;