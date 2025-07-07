import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import AnimatedBackground from './components/AnimatedBackground';
import MovingRays from './components/MovingRays';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DevOps from './pages/DevOps';
import WebDev from './pages/WebDev';
import MachineLearning from './pages/MachineLearning';
import GenAI from './pages/GenAI';
import Certifications from './pages/Certifications';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
          <AnimatedBackground />
          <MovingRays />
          <div className="relative z-10">
            <Header />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/devops" element={<DevOps />} />
                <Route path="/webdev" element={<WebDev />} />
                <Route path="/ml" element={<MachineLearning />} />
                <Route path="/genai" element={<GenAI />} />
                <Route path="/certifications" element={<Certifications />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;