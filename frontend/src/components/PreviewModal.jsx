import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const PreviewModal = ({ isOpen, onClose, url, title }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
                <div
                    className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
                    onClick={onClose}
                ></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                >
                    {/* Header Bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/50">
                        <div className="flex items-center gap-4">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Live Preview: {title}
                            </h3>
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 hover:bg-brand-500/20 transition-colors"
                            >
                                Open in new tab <ExternalLink size={12} />
                            </a>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Iframe Container */}
                    <div className="flex-1 w-full bg-slate-100 dark:bg-zinc-900 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin"></div>
                        </div>
                        <iframe
                            src={url}
                            title={`Preview of ${title}`}
                            className="absolute inset-0 w-full h-full border-0 z-10 bg-white dark:bg-zinc-950"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        ></iframe>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PreviewModal;
