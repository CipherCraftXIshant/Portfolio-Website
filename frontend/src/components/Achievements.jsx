import { motion } from 'framer-motion';

const Achievements = () => {
    return (
        <section id="achievements" className="pt-24 pb-8 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
                        Achievements & <span className="text-brand-500">Milestones</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mb-8"></div>
                    
                    <div className="card-glass p-8 rounded-2xl shadow-lg">
                        <ul className="space-y-6">
                            <motion.li whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-default">
                                <span className="text-brand-500 text-xl font-bold leading-none mt-1">▹</span>
                                <span className="text-zinc-700 dark:text-zinc-300 text-lg">Selected as a <strong>GSSOC'25 Contributor</strong>.</span>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-default">
                                <span className="text-brand-500 text-xl font-bold leading-none mt-1">▹</span>
                                <span className="text-zinc-700 dark:text-zinc-300 text-lg">Solved <strong>400+ DSA questions</strong> on LeetCode, CodeForces and GFG.</span>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-default">
                                <span className="text-brand-500 text-xl font-bold leading-none mt-1">▹</span>
                                <span className="text-zinc-700 dark:text-zinc-300 text-lg">Participated in multiple national-level <strong>hackathons</strong>.</span>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
