import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // In a real scenario, this fetches from the backend we created
        fetch('http://localhost:5000/api/portfolio')
            .then(res => res.json())
            .then(json => {
                if (json.success) setData(json.data.about);
            })
            .catch(err => console.error(err));
    }, []);

    const services = [
        {
            icon: <Layout className="text-brand-400" size={32} />,
            title: "Frontend Development",
            description: "Creating beautiful, responsive, and intuitive web interfaces using modern frameworks like React and stylistic tools like Tailwind CSS."
        },
        {
            icon: <Server className="text-accent-400" size={32} />,
            title: "Backend Engineering",
            description: "Building scalable and robust server-side applications and APIs using Node.js, Express, and modern database solutions."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" className="stroke-indigo-500"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" className="stroke-rose-500"/>
                </svg>
            ),
            title: "Data Structures and Algorithms",
            description: "Designing systematic approaches to problem solving.",
            links: [
                {
                    url: "https://leetcode.com/u/Ishant-XD/",
                    label: "LeetCode",
                    icon: (
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835s.513 2.853 1.494 3.835l4.332 4.363c.981.981 2.338 1.495 3.836 1.495s2.854-.514 3.835-1.495l2.697-2.607c.514-.514.498-1.366-.038-1.901-.535-.534-1.387-.552-1.902-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                        </svg>
                    )
                },
                {
                    url: "https://codeforces.com/profile/The_Ishant_Sharma",
                    label: "Codeforces",
                    icon: (
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5z"/>
                        </svg>
                    )
                }
            ]
        }
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 md:flex justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-2/3"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            About <span className="text-brand-500">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-brand-500 mb-8 rounded-full"></div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                            {data?.description || "I am a passionate developer with a knack for building beautiful, resilient software. I merge technical expertise with design sensibilities to deliver products that don't just work flawlessly but also feel incredible to use."}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 }}
                                    className="card-glass p-8 rounded-2xl group transition-all duration-300 h-full"
                                >
                                    <div className="mb-6 p-4 bg-slate-100 dark:bg-zinc-800/50 inline-block rounded-xl group-hover:bg-slate-200 dark:group-hover:bg-zinc-800 transition-colors shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{service.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    {service.links && (
                                        <div className="flex gap-4 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/50">
                                            {service.links.map((link, i) => (
                                                <a 
                                                    key={i} 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    title={link.label}
                                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors shadow-sm cursor-pointer z-10 relative"
                                                >
                                                    {link.icon}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
