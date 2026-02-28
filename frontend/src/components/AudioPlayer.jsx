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
                // If it successfully autoplays, we don't need to force interaction
                setHasInteracted(true);
            }).catch(() => {
                // Autoplay was prevented (expected behavior)
                setIsPlaying(false);
                // Block scroll until they interact with the overlay
                document.body.style.overflow = 'hidden';
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
        <>
            {/* Welcome Alert Overlay */}
            {!hasInteracted && (
                <div className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-xl flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="card-glass max-w-md w-full p-8 rounded-3xl text-center shadow-[0_0_50px_rgba(34,197,94,0.1)] border border-brand-500/20"
                    >
                        <div className="w-20 h-20 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Music size={32} className="text-brand-400" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-4 text-white">Experience the Site</h2>
                        <p className="text-zinc-400 mb-8 leading-relaxed font-light">
                            For the full immersive 3D experience, please enable the background audio track.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => {
                                    togglePlay();
                                    document.body.style.overflow = 'auto'; // Re-enable scroll if it was blocked
                                }}
                                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
                            >
                                <Volume2 size={20} /> Play Music & Enter
                            </button>
                            <button
                                onClick={() => {
                                    setHasInteracted(true);
                                    document.body.style.overflow = 'auto';
                                }}
                                className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium py-4 rounded-xl transition-all border border-zinc-800"
                            >
                                Continue Without Sound
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Floating toggle button that appears after interaction */}
            {hasInteracted && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed bottom-6 right-6 z-50 mix-blend-difference"
                >
                    <button
                        id="audio-toggle-btn"
                        onClick={togglePlay}
                        className={`group flex items-center gap-3 w-14 h-14 justify-center rounded-full backdrop-blur-md border shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${isPlaying ? 'bg-brand-500 text-white border-brand-400' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white hover:bg-zinc-800'}`}
                    >
                        <div className="relative flex items-center justify-center w-6 h-6">
                            {isPlaying ? (
                                <>
                                    <Volume2 size={24} className="relative z-10 drop-shadow-md" />
                                    <motion.div
                                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="absolute inset-0 bg-brand-300/50 rounded-full"
                                    />
                                </>
                            ) : (
                                <VolumeX size={24} />
                            )}
                        </div>
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default AudioPlayer;
