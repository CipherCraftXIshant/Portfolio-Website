import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/portfolio')
            .then(res => res.json())
            .then(json => {
                if (json.success) setProjects(json.data.projects);
            })
            .catch(err => console.error(err));
    }, []);

    const displayProjects = projects.length > 0 ? projects : [
        {
            id: 1,
            title: "E-Cart",
            description: "Built a production-ready, full-stack e-commerce platform with a custom Node.js/Express REST API backend and React frontend, supporting end-to-end shopping workflows. Implemented JWT-based authentication, cart management, wishlist, and category filtering.",
            techStack: ["ReactJS", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "REST API"],
            githubUrl: "https://github.com/CipherCraftXIshant/E-Cart",
            liveUrl: "https://github.com/CipherCraftXIshant/E-Cart"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Developed a personal portfolio with Next.js featuring interactive music playback, smooth animations, and a clean UI inspired by top developer portfolios.",
            techStack: ["ReactJS", "Next.js", "Node.js", "ExpressJS", "REST API", "PostgreSQL"],
            githubUrl: "https://github.com/CipherCraftXIshant/Portfolio-Website",
            liveUrl: "https://github.com/CipherCraftXIshant/Portfolio-Website"
        },
        {
            id: 3,
            title: "Quolit - Random Quote Generator",
            description: "Built a lightweight, fast web app that fetches and displays categorized random quotes using a public API, with filter and share functionality.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/CipherCraftXIshant/Random-Quote-Generator",
            liveUrl: "https://viewquotes2o.netlify.app"
        },
        {
            id: 4,
            title: "Password-Generator and Checker",
            description: "A secure utility application to generate strong, customizable passwords and dynamically check password strength criteria.",
            techStack: ["ReactJS", "TailwindCSS", "JavaScript"],
            githubUrl: "https://github.com/CipherCraftXIshant/Password-Generator-and-checker",
            liveUrl: "https://project-demo-sigma-green.vercel.app"
        },
        {
            id: 5,
            title: "Linkedin Clone",
            description: "A responsive, feature-rich front-end clone of the LinkedIn web interface, demonstrating complex layout design and component structuring.",
            techStack: ["ReactJS", "TailwindCSS", "Vanilla"],
            githubUrl: "https://github.com/CipherCraftXIshant/LinkedinClone",
            liveUrl: "https://github.com/CipherCraftXIshant/LinkedinClone"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white"
                    >
                        Featured <span className="text-brand-500">Work</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mb-8"></div>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-2xl">
                        Here are some of the selected projects that showcase my passion for Web development and intuitive design.
                    </p>
                </div>

                <div className="space-y-24">
                    {displayProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
                        >

                            {/* Project Image Placeholder */}
                            <div className="w-full md:w-1/2 relative group">
                                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={2000}>
                                    <div className="absolute inset-0 bg-brand-500/20 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                    <div className="relative aspect-video bg-slate-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-2xl flex items-center justify-center transform-gpu">
                                        <div className="text-zinc-400 dark:text-zinc-600 font-serif text-2xl group-hover:scale-110 transition-transform duration-500 group-hover:text-brand-500 shadow-brand-500/50 drop-shadow-2xl">{project.title} Preview</div>
                                        <div className="absolute inset-0 bg-brand-500 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    </div>
                                </Tilt>
                            </div>

                            {/* Project Info */}
                            <motion.div
                                className="w-full md:w-1/2 flex flex-col justify-center"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: idx * 0.4 }}
                            >
                                <div className="mb-8 perspective-[1000px] inline-block z-20 relative">
                                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
                                        <div className="card-glass py-4 px-8 rounded-2xl shadow-2xl border-t border-l border-white/60 dark:border-white/10 relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-400 to-brand-600"></div>
                                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 dark:text-white tracking-tight drop-shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </Tilt>
                                </div>

                                <div className="card-glass p-6 rounded-xl mb-6 relative z-10 md:-ml-10 shadow-xl border border-zinc-200 dark:border-zinc-700/50">
                                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-4 mb-8 text-sm font-mono text-zinc-600 dark:text-zinc-400">
                                    {project.techStack.map((tech, i) => (
                                        <motion.li 
                                            key={i} 
                                            whileHover={{ scale: 1.1, translateY: -2, borderColor: '#22c55e', color: '#16a34a' }}
                                            className="px-3 py-1 bg-slate-200 dark:bg-zinc-800/50 rounded-full border border-zinc-300 dark:border-zinc-700 cursor-default transition-colors"
                                        >
                                            {tech}
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex gap-6 items-center">
                                    <a href={project.githubUrl} className="text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2">
                                        <Github size={20} /> <span className="text-sm font-medium">Repository</span>
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2"
                                    >
                                        <Eye size={20} /> <span className="text-sm font-medium">Live Demo</span>
                                    </a>
                                </div>
                            </motion.div>

                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Projects;
