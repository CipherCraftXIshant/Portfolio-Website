import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 pt-4 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`rounded-full transition-all duration-500 overflow-hidden ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}
                >
                    <div className="flex justify-between items-center px-6 py-3">
                        <div className="flex-shrink-0 group cursor-pointer">
                            <a href="#home" className="text-2xl font-serif font-bold tracking-tighter flex items-center">
                                <motion.span
                                    className="inline-block"
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Cipher<span className="text-brand-500">.</span>
                                </motion.span>
                            </a>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-8 items-center cursor-pointer">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group py-2">
                                    {link.name}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full rounded-full blur-[1px]"></span>
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 pl-6 border-l border-zinc-800">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="md:hidden mx-4 rounded-3xl overflow-hidden bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 shadow-2xl"
                    >
                        <div className="flex flex-col space-y-4 px-6 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-zinc-300 hover:text-white hover:translate-x-2 transition-transform"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-6 pt-4 border-t border-zinc-800">
                                <a href="https://github.com" className="text-zinc-400 hover:text-white"><Github size={20} /></a>
                                <a href="https://linkedin.com" className="text-zinc-400 hover:text-white"><Linkedin size={20} /></a>
                                <a href="https://twitter.com" className="text-zinc-400 hover:text-white"><Twitter size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
