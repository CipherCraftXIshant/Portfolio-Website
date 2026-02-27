import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSparkle from './components/CursorSparkle';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-200 font-sans selection:bg-brand-500/30 selection:text-brand-100 perspective-[1000px]">
      <CursorSparkle />
      <AudioPlayer />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
