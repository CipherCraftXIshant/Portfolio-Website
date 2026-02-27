import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-zinc-900 pb-12 mb-8">

                    <div className="md:w-1/3 text-center md:text-left">
                        <a href="#home" className="text-3xl font-serif font-bold tracking-tighter inline-block mb-4">
                            Cipher<span className="text-brand-500">.</span>
                        </a>
                        <p className="text-zinc-500 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
                            Building digital products, brands, and experience with a focus on intuitive design and robust architecture.
                        </p>
                    </div>

                    <div className="flex gap-16 text-center md:text-left">
                        <div>
                            <h4 className="text-white font-semibold mb-4">Links</h4>
                            <ul className="space-y-3">
                                <li><a href="#about" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">About</a></li>
                                <li><a href="#skills" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Skills</a></li>
                                <li><a href="#projects" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Projects</a></li>
                                <li><a href="#contact" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Socials</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-500 hover:text-white transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-500 hover:text-white transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-500 hover:text-white transition-all">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
                    <p>© {new Date().getFullYear()} Cipher Xishant. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <Heart size={14} className="text-accent-500 fill-accent-500" /> and lots of coffee.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
