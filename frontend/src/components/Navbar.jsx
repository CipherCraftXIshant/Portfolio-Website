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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl font-serif font-bold tracking-tighter">
                            Cipher<span className="text-brand-500">.</span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center cursor-pointer">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 pl-4 border-l border-zinc-800">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-zinc-300 hover:text-white">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 py-4"
                    >
                        <div className="flex flex-col space-y-4 px-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-zinc-300 hover:text-white hover:pl-2 transition-all"
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
