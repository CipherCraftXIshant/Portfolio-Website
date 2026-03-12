import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Tech Corp",
    duration: "June 2025 - Present",
    description: "Developing scalable web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software."
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    duration: "Jan 2024 - May 2025",
    description: "Built responsive and interactive user interfaces for various client projects. Optimized application performance and accessibility."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            My professional journey and work history.
          </p>
        </motion.div>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800/50 pl-8 ml-4 md:ml-0 md:pl-0 md:space-y-12">
          {/* Timeline center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-zinc-800/50 -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative md:flex items-center justify-between w-full mb-8 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-10 md:left-1/2 w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

              <div className="md:w-[45%]">
                <div className="card-glass p-6 md:p-8 rounded-2xl hover:border-brand-500/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white dark:group-hover:text-zinc-950 transition-colors">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200">{exp.role}</h3>
                      <p className="text-brand-600 dark:text-brand-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-500 mb-4 inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
                    {exp.duration}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
