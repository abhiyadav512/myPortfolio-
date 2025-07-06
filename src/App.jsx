import React from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BottomNav from './components/BottomNav';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div className="relative w-full flex flex-col items-center p-4">
      <div className=" max-w-4xl flex flex-col items-center gap-12">
        <HeroSection />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <BottomNav/>

      <Analytics/>
    </div>
  );
};

export default App;
