import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored === 'light' || stored === 'dark' ? stored : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
