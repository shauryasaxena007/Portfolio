import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-lg  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - The Infinity/Intersection symbol from your original code */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl text-brandBlue font-bold">⨝</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 dark:text-slate-200 hover:text-brandBlue dark:hover:text-brandBlue font-medium transition-colors hover:underline"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
 onClick={() => setDarkMode(prev => !prev)}
        className="text-xl text-white bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
      >
  {darkMode ? <FaSun /> : <FaMoon />}
</button>


          </div>

          {/* Mobile Actions (Theme + Menu Toggle) */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-2xl text-slate-700 dark:text-slate-200"
            >
              {navOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brandBlue"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;