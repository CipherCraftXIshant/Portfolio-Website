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
                            Welcome to my portfolio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                            Hi, I'm <span className="text-gradient">Cipher Xishant</span>
                            <br />
                            <span className="text-zinc-300">I build things for the web.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-light">
                            I'm a full-stack developer and designer specializing in building exceptional digital experiences
                            with modern, dynamic aesthetics and robust architectures.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#projects" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                onClick={() => document.getElementById('audio-toggle-btn')?.click()}
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full font-medium transition-all border border-zinc-700 hover:border-zinc-600 flex items-center gap-2"
                            >
                                Play Music <span className="text-xl">🎵</span>
                            </button>
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
                            <div className="absolute inset-0 bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 transform -rotate-3 transition-transform hover:-rotate-6 duration-500 shadow-2xl">
                                {/* Placeholder for Profile Auto-Generation / Image */}
                                <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                                    <div className="text-6xl font-serif font-bold text-zinc-700">CX</div>
                                </div>
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
