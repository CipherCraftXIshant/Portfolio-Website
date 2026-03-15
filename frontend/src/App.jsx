import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSparkle from './components/CursorSparkle';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-600 dark:selection:text-brand-100 bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-slate-200 transition-colors duration-500">
      <CursorSparkle />
      <AudioPlayer />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
