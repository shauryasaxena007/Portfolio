import { useState, useEffect } from 'react';
import darkBg from "./images/bgDARK.jpg";
import lightBg from "./images/bgLIGTH.jpg";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreSkills from './components/core';
import Achievements from './components/Achievements';
import EducationExperience from "./components/EducationExperience";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative min-h-screen w-full">
      {/* 🔹 Fixed Background Image */}
      <div
        className="fixed inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: darkMode ? `url(${darkBg})` : `url(${lightBg})`,
        }}
      >
        {/* 🔹 Optional Blur & Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[7px]"></div>
      
{/* Floating Balls */}
<div className="absolute top-1/4 left-5 w-64 h-64 bg-blue-300 rounded-full blur  animate-float1"></div>

<div className="absolute top-1/3 right-2 w-52 h-52 bg-blue-400 rounded-full  blur animate-float2"></div>

<div className="absolute bottom-14 left-1/2 w-40 h-40 bg-green-200 rounded-full blur animate-float3"></div>

    </div>

      {/* 🔹 Content */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="pt-40">
          <main className="container mx-auto px-4 space-y-16">
            <Hero />
            <About />
            <CoreSkills />
            <EducationExperience />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
