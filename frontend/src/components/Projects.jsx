import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
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
            title: "E-commerce Platform",
            description: "A full-featured modern e-commerce platform with cart and checkout functionalities.",
            techStack: ["React", "Express", "Node.js", "MongoDB", "Tailwind"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task tracking tool built for productivity with real-time updates.",
            techStack: ["React", "Firebase", "Tailwind"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 3,
            title: "AI Chat Interface",
            description: "A sleek interface for interacting with large language models seamlessly.",
            techStack: ["React", "Tailwind", "OpenAI API"],
            githubUrl: "#",
            liveUrl: "#"
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
                        className="text-3xl md:text-5xl font-serif font-bold mb-4"
                    >
                        Featured <span className="text-brand-500">Work</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mb-8"></div>
                    <p className="text-lg text-zinc-400 font-light max-w-2xl">
                        Here are some of the selected projects that showcase my passion for front-end development and intuitive design.
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
                                    <div className="relative aspect-video bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden shadow-2xl flex items-center justify-center transform-gpu">
                                        <div className="text-zinc-600 font-serif text-2xl group-hover:scale-110 transition-transform duration-500 group-hover:text-brand-500 shadow-brand-500/50 drop-shadow-2xl">{project.title} Preview</div>
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
                                <span className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-2">Featured Project</span>
                                <h3 className="text-3xl font-bold mb-6 text-white">{project.title}</h3>

                                <div className="card-glass p-6 rounded-xl mb-6 relative z-10 md:-ml-10 shadow-xl border border-zinc-700/50">
                                    <p className="text-zinc-300 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-4 mb-8 text-sm font-mono text-zinc-400">
                                    {project.techStack.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>

                                <div className="flex gap-6 items-center">
                                    <a href={project.githubUrl} className="text-zinc-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                                        <Github size={20} /> <span className="text-sm font-medium">Repository</span>
                                    </a>
                                    <a href={project.liveUrl} className="text-zinc-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                                        <ExternalLink size={20} /> <span className="text-sm font-medium">Live Demo</span>
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
