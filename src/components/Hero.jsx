import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const words = ["Frontend Developer", "Web Developer", "Data Scientist", "ML Enthusiast"];

  // 1. Typing Effect Logic
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loop % words.length];
      const updatedText = isDeleting 
        ? currentWord.substring(0, text.length - 1) 
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop]);

  // 2. Resume Download Function (DEFINED INSIDE THE COMPONENT)
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "assets/Shaurya_Saxena_Resume.pdf"; // Ensure this file is in your 'public' folder
    link.download = "Shaurya_Saxena_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-1 pb-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            className="md:w-3/5"
        >
            <p className="text-brandBlue font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 pb-2">
                Shaurya Saxena
            </h1>
            <h2 className="text-2xl font-mono text-slate-500 dark:text-slate-700 min-h-[40px]">
                {text}<span className="animate-pulse border-r-2 border-brandBlue ml-1"></span>
            </h2>
            
            <p className="mt-6 text-slate-600 dark:text-slate-500 leading-relaxed max-w-xl">
                I'm a <strong>Frontend Developer</strong> and <strong>Data Scientist</strong> who loves turning ideas into interactive web experiences and data into meaningful stories.  I build responsive, visually appealing interfaces while ensuring smooth performance and usability.

                Alongside front-end development. I explore the world of data—analyzing patterns, building models, and creating visual insights that support smart decision-making. I enjoy working at the intersection of design, development, and data, where creativity meets logic.

                 Driven by curiosity and growth, I'm always learning new technologies and refining my skills to create solutions that make an impact.
               I am a <strong>Machine Learning enthusiast </strong>and AWS service provider with a strong interest in building intelligent, data-driven solutions and deploying them on scalable cloud infrastructure. I enjoy working with data to design, train, and optimize machine learning models that solve real-world problems. 
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
                <a href="#contact" className="bg-brandBlue text-white px-8 py-3 rounded-full hover:border scale-105 transition shadow-lg shadow-blue-500/30">
                    Get In Touch
                </a>
                <button 
                    onClick={handleDownload}
                    className="border-2 border-brandBlue text-brandBlue px-8 py-3 rounded-full flex items-center gap-2 hover:bg-brandBlue hover:text-blue-200 transition group"
                >
                    <FaDownload className="group-hover:animate-bounce" /> Download Resume
                </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
                <a href="https://github.com/shauryasaxena007" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-800 hover:bg-brandBlue hover:text-white transition"><FaGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/shaurya-saxena-651894373" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-blue-500 hover:bg-brandBlue hover:text-white transition"><FaLinkedin size={20} /></a>

                <a href="https://twitter.com/@Shaurya_261106"  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-800 hover:text-white transition"><FaTwitter size={20} /></a>

                <a href="https://www.instagram.com/_shaudit__saxena_" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-pink-500 hover:text-white transition"><FaInstagram size={20} /></a>

                <a href="https://wa.me/917839256353" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-green-500 hover:text-white transition"><FaWhatsapp size={20} /></a>

                
            </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 md:mt-0 relative"
        >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-600">
                <img src="src/images/image.png" alt="Shaurya Saxena, a frontend developer and data scientist, smiling in a professional headshot with a blue and purple gradient background, conveying approachability and professional expertise" className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-900" />
            </div>
            <div className="absolute -bottom-4 right-0 bg-white dark:bg-slate-700 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                <p className="text-sm font-bold text-blue-300">1+ Years</p>
                <p className="text-xs text-slate-500">Experience</p>
            </div>
        </motion.div>
    </section>
);
};

export default Hero;