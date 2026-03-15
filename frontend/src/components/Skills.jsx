import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/portfolio')
            .then(res => res.json())
            .then(json => {
                if (json.success) setSkills(json.data.skills);
            })
            .catch(err => console.error(err));
    }, []);

    const displaySkills = skills.length > 0 ? skills : [
        { 
            category: "Languages", 
            items: ["Java", "C", "Python", "SQL"],
            icon: <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        },
        { 
            category: "Web Development", 
            items: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "Firebase"],
            icon: <svg className="w-6 h-6 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M12 7h.01"/><path d="M3 11h18"/></svg>
        },
        { 
            category: "Databases", 
            items: ["MySQL", "MongoDB", "PostgreSQL"],
            icon: <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
        },
        { 
            category: "Deployment", 
            items: ["Vercel", "Netlify", "Git", "GitHub Actions"],
            icon: <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
        },
        { 
            category: "Tools", 
            items: ["VS Code", "IntelliJ IDEA", "Figma", "Canva"],
            icon: <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> 
        }
    ];

    // Variants for staggered container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Variants for individual skill pills
    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <section id="skills" className="py-24 relative bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 120, damping: 14 }}
                        className="text-3xl md:text-5xl font-serif font-bold mb-4 inline-block text-slate-900 dark:text-white"
                    >
                        My <span className="text-brand-500">Skills</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-brand-500 rounded-full mx-auto"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displaySkills.map((skillGroup, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                            className="h-full"
                        >
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={2500} className="h-full">
                                <motion.div
                                    whileHover={{ boxShadow: "0px 10px 30px -10px rgba(34, 197, 94, 0.3)" }}
                                    className="card-glass p-8 rounded-2xl border-t-4 border-t-brand-500/50 hover:border-t-brand-500 transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-lg shadow-sm">
                                            {skillGroup.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{skillGroup.category}</h3>
                                    </div>
                                    
                                    <motion.div 
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex flex-wrap gap-3"
                                    >
                                        {skillGroup.items.map((skill, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={itemVariants}
                                                whileHover={{ 
                                                    scale: 1.1, 
                                                    y: -5,
                                                    backgroundColor: "rgba(34, 197, 94, 0.1)", // brand-500/10
                                                    color: "#16a34a", // brand-600
                                                    borderColor: "rgba(34, 197, 94, 0.5)",
                                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                                }}
                                                className="px-4 py-2 bg-slate-200 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-medium border border-zinc-300 dark:border-zinc-700/50 cursor-pointer shadow-sm relative overflow-hidden group"
                                            >
                                                {/* Sparkle subtle overlay effect on hover */}
                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-15deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></span>
                                                <span className="relative z-10">{skill}</span>
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
