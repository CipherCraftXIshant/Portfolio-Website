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
            icon: <Code className="text-blue-400" size={32} />,
            title: "UI/UX Architecture",
            description: "Designing systematic approaches to component libraries and styling that are highly performant and easy to maintain."
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
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
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
