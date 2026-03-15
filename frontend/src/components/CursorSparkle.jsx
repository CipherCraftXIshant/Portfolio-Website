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

            // Throttle particle creation
            const now = Date.now();
            if (now - lastTime > 40) {
                idCounter.current += 1;

                // Website theme colors (emerald green, pink/magenta accent)
                const themeColors = ['#4ade80', '#22c55e', '#ec4899', '#f472b6'];
                const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];

                // 3D Geometry types
                const shapes = ['circle', 'square', 'triangle'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];

                const newParticle = {
                    id: idCounter.current,
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 10 + 5, // 5 to 15px
                    color: randomColor,
                    shape: shape,
                    rotation: Math.random() * 360
                };

                setParticles((prev) => [...prev, newParticle]);

                // Remove old particles
                setTimeout(() => {
                    setParticles((prev) => prev.filter(p => p.id !== newParticle.id));
                }, 1000); // linger a bit longer for 3D trail

                lastTime = now;
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <>
            {/* 3D Glowing Cursor Core */}
            <div
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center transform-gpu"
                style={{
                    transform: `translate(${mousePos.x - 20}px, ${mousePos.y - 20}px) translateZ(50px)`,
                    background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, transparent 70%)',
                    boxShadow: '0 0 30px 10px rgba(74, 222, 128, 0.2)'
                }}
            >
                <div className="w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_10px_#4ade80]"></div>
            </div>

            {/* 3D Floating Particles */}
            <div className="fixed inset-0 pointer-events-none z-[9998] perspective-[1000px]">
                <AnimatePresence>
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0.8, x: p.x, y: p.y, rotateX: 0, rotateY: 0, rotateZ: p.rotation, scale: 1, z: 0 }}
                            animate={{
                                opacity: 0,
                                scale: 0.2,
                                y: p.y + (Math.random() - 0.5) * 100,
                                x: p.x + (Math.random() - 0.5) * 100,
                                rotateX: Math.random() * 360,
                                rotateY: Math.random() * 360,
                                rotateZ: p.rotation + 180,
                                z: -200 // push back in 3D space
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`absolute border border-opacity-50`}
                            style={{
                                width: p.size,
                                height: p.size,
                                borderColor: p.color,
                                boxShadow: `0 0 ${p.size}px ${p.color}40`,
                                borderRadius: p.shape === 'circle' ? '50%' : '2px',
                                clipPath: p.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
                                backgroundColor: p.shape === 'triangle' ? p.color : 'transparent',
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CursorSparkle;
