import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/shauryasaxena007" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shaurya-saxena-651894373" },
    { icon: <FaTwitter />, url: "https://twitter.com/@Shaurya_261106" },
    { icon: <FaWhatsapp />, url: "https://wa.me/917839256353" },
  ];

  return (
    <footer className="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          {/* Quote Section - Your requested Bhagavad Gita quote */}
        <div className="text-center mb-8 max-w-2xl pb-10">
          <blockquote className="text-lg italic font-serif text-slate-700 dark:text-slate-500 mb-2">
            "You have the right to work, but never to the fruit of work. You should never engage in action 
            for the sake of reward, nor should you long for inaction."
          </blockquote>
          <cite className="text-sm text-slate-100 font-semibold not-italic">
            — Bhagavad Gita, Chapter 2, Verse 47
          </cite>
        </div>

        {/* Social Icons */}
        <div className="flex gap-9 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-2.5 bg-slate-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-brandBlue transition-all transform hover:bg-blue-400 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

      
        {/* Copyright */}
        <div className="text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Shaurya Saxena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;