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

    // Fallback data if backend is not available
    const displaySkills = skills.length > 0 ? skills : [
        { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
        { category: "Backend & Core", items: ["Node.js", "Express.js", "MongoDB", "SQL", "Java", "Python", "C"] },
        { category: "Tools", items: ["Git", "GitHub", "Postman", "Figma", "Docker", "VS Code"] }
    ];

    return (
        <section id="skills" className="py-24 relative bg-zinc-900/30">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold mb-4 inline-block"
                    >
                        My <span className="text-brand-500">Skills</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {displaySkills.map((skillGroup, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIdx * 0.15 }}
                        >
                            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2000}>
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: groupIdx * 0.3 }}
                                    className="card-glass p-8 rounded-2xl border-t-4 border-t-brand-500/50 hover:border-t-brand-500 transition-colors duration-300 h-full"
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-white">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skillGroup.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-zinc-800/80 text-zinc-300 rounded-lg text-sm font-medium border border-zinc-700/50 hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all cursor-default shadow-sm hover:shadow-brand-500/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
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
