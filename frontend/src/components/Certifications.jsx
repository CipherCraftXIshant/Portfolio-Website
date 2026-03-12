import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import PreviewModal from './PreviewModal';

const certifications = [
    {
        title: "AWS Certified Developer - Associate",
        provider: "Amazon Web Services",
        date: "Aug 2024",
        link: "https://example.com"
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        provider: "Coursera",
        date: "Dec 2023",
        link: "https://example.com"
    },
    {
        title: "Google Data Analytics Professional Certificate",
        provider: "Google",
        date: "May 2023",
        link: "https://example.com"
    }
];

export default function Certifications() {
    const [previewData, setPreviewData] = useState({ isOpen: false, url: '', title: '' });

    const openPreview = (url, title, e) => {
        e.preventDefault();
        setPreviewData({ isOpen: true, url, title });
    };

    return (
        <section id="certifications" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
                        Professional <span className="text-brand-500">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mb-6"></div>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-2xl">
                        Continuous learning and industry validations of my technical skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card-glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-brand-500/10 dark:bg-brand-500/20 rounded-xl text-brand-600 dark:text-brand-400">
                                    <Award size={24} />
                                </div>
                                <button
                                    onClick={(e) => openPreview(cert.link, cert.title, e)}
                                    className="text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors bg-slate-100 dark:bg-zinc-800/50 p-2 rounded-full cursor-pointer"
                                >
                                    <ExternalLink size={16} />
                                </button>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2 leading-tight min-h-[56px]">{cert.title}</h3>
                            </div>
                            <div className="flex justify-between items-center text-sm mt-4">
                                <span className="text-brand-600 dark:text-brand-400 font-medium">{cert.provider}</span>
                                <span className="text-zinc-500 dark:text-zinc-400">{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <PreviewModal
                isOpen={previewData.isOpen}
                onClose={() => setPreviewData({ ...previewData, isOpen: false })}
                url={previewData.url}
                title={previewData.title}
            />
        </section>
    );
}
