import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorSparkle = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);
    const idCounter = useRef(0);

    useEffect(() => {
        let lastTime = 0;
        const updateMousePosition = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            // Throttle particle creation to prevent lag
            const now = Date.now();
            if (now - lastTime > 30) {
                idCounter.current += 1;
                const newParticle = {
                    id: idCounter.current,
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 8 + 4, // 4 to 12px
                    color: Math.random() > 0.5 ? '#f97316' : '#ef4444', // Orange or red flame
                };

                setParticles((prev) => [...prev, newParticle]);

                // Remove old particles
                setTimeout(() => {
                    setParticles((prev) => prev.filter(p => p.id !== newParticle.id));
                }, 800);

                lastTime = now;
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)`,
                    background: 'radial-gradient(circle, rgba(249,115,22,0.8) 0%, rgba(249,115,22,0) 70%)',
                    boxShadow: '0 0 20px 10px rgba(249,115,22,0.3)'
                }}
            />

            <div className="fixed inset-0 pointer-events-none z-[9998]">
                <AnimatePresence>
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 1, scale: 1, x: p.x, y: p.y }}
                            animate={{
                                opacity: 0,
                                scale: 0,
                                y: p.y - Math.random() * 50 - 20, // Float upwards like a flame
                                x: p.x + (Math.random() - 0.5) * 40
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute rounded-full"
                            style={{
                                width: p.size,
                                height: p.size,
                                backgroundColor: p.color,
                                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                                filter: 'blur(1px)'
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CursorSparkle;
