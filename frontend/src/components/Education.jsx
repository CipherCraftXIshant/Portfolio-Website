import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "XYZ University",
        duration: "2021 - 2025",
        description: "Core coursework focused on Data Structures, Algorithms, Software Engineering, and Artificial Intelligence. Active member of the Coding Club.",
        grade: "CGPA: 8.5/10"
    },
    {
        degree: "High School (Class XII)",
        institution: "ABC Public School",
        duration: "2019 - 2021",
        description: "Specialized in Sciences with Computer Science. Graduated with honors.",
        grade: "92%"
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
                        Educational <span className="text-brand-500">Background</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mb-6"></div>
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="card-glass p-8 rounded-2xl relative overflow-hidden group hover:border-brand-500/30 transition-colors"
                        >
                            {/* Subtle background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-colors"></div>

                            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex gap-4 md:gap-6">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="p-3 bg-brand-500/10 dark:bg-brand-500/20 rounded-xl text-brand-600 dark:text-brand-400">
                                            <GraduationCap size={28} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-1">{edu.degree}</h3>
                                        <h4 className="text-lg text-brand-600 dark:text-brand-400 font-medium mb-4">{edu.institution}</h4>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-2 md:mt-2">
                                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800/80 px-4 py-1.5 rounded-full whitespace-nowrap border border-zinc-200 dark:border-zinc-700/50">
                                        {edu.duration}
                                    </span>
                                    <span className="text-brand-600 dark:text-brand-400 font-mono text-sm tracking-wide">
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
