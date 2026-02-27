import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef(null);

    // Initialize audio element on mount
    useEffect(() => {
        // Using a premium lo-fi stock/royalty-free music URL 
        audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;

        // Try to autoplay, but browsers usually block this until user interaction
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(() => {
                // Autoplay was prevented (expected behavior)
                setIsPlaying(false);
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!hasInteracted) setHasInteracted(true);

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 left-6 z-50 mix-blend-difference"
        >
            <button
                onClick={togglePlay}
                className={`group flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md border border-zinc-700/50 shadow-2xl transition-all duration-300 ${isPlaying ? 'bg-brand-500/20 text-brand-400 border-brand-500/30' : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800/80'}`}
            >
                <div className="relative flex items-center justify-center w-6 h-6">
                    {isPlaying ? (
                        <>
                            <Volume2 size={18} className="absolute z-10" />
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-brand-400 rounded-full"
                            />
                        </>
                    ) : (
                        <VolumeX size={18} />
                    )}
                </div>

                <span className="text-sm font-medium tracking-wide">
                    {isPlaying ? 'Playing Beats' : 'Play Music'}
                </span>

                {isPlaying && (
                    <div className="flex items-end gap-[2px] h-3 ml-1">
                        {[1, 2, 3].map((bar) => (
                            <motion.div
                                key={bar}
                                animate={{ height: ['20%', '100%', '20%'] }}
                                transition={{ repeat: Infinity, duration: 0.6 + bar * 0.2, ease: "easeInOut" }}
                                className="w-1 bg-brand-400 rounded-t-sm"
                            />
                        ))}
                    </div>
                )}
            </button>
        </motion.div>
    );
};

export default AudioPlayer;
