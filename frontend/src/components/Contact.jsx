import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', msg: data.message });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: data.error || 'Something went wrong.' });
            }
        } catch (err) {
            console.error(err);
            setStatus({ type: 'error', msg: 'Failed to connect to the server.' });
        }
        setLoading(false);
    };

    return (
        <section id="contact" className="py-24 relative bg-slate-100 dark:bg-zinc-900/30 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold mb-4 inline-block text-slate-900 dark:text-white"
                    >
                        Get In <span className="text-brand-500">Touch</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-brand-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-light">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-slate-200 dark:bg-zinc-800 rounded-xl text-brand-600 dark:text-brand-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Email</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">ishant4641@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-slate-200 dark:bg-zinc-800 rounded-xl text-brand-600 dark:text-brand-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Location</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">Chandigarh / Remote</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-slate-200 dark:bg-zinc-800 rounded-xl text-brand-600 dark:text-brand-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Phone</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">+91 9306909499</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="card-glass p-8 rounded-2xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-light"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-light"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none font-light"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {status.msg && (
                                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
                                    {status.msg}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2 disabled:opacity-70 shadow-lg shadow-brand-500/20"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <Send size={18} />}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
