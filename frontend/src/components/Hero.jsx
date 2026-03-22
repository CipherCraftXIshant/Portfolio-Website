import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-3/5 pt-10 md:pt-0"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 text-brand-400 font-medium text-sm mb-6 border border-brand-500/20">
                            Welcome to my portfolio Website
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                            Hi, I'm <span className="text-gradient">Ishant Sharma</span>
                            <br />
                            <span className="text-zinc-500 dark:text-zinc-300">I build things for the web.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl font-light">
                            I'm a full-stack developer specializing in building exceptional digital experiences
                            with modern, dynamic aesthetics and robust architectures.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#projects" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1Imz6vgmpmqF0KfiPMiRG1_5EEqHfEtMa/view?usp=share_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-8 py-3 rounded-full font-medium transition-all border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 flex items-center gap-2"
                            >
                                View Resume <Download size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 border-2 border-brand-500/30 rounded-2xl transform rotate-6 transition-transform hover:rotate-12 duration-500"></div>
                            <div className="absolute inset-0 bg-slate-50 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 transform -rotate-3 transition-transform hover:-rotate-6 duration-500 shadow-2xl">
                                <img 
                                    src="/images/profile.png" 
                                    alt="Ishant Sharma - Profile" 
                                    className="w-full h-full object-cover object-top filter hover:brightness-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none rounded-2xl"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50"
            >
                <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
