import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { title: "React Certification", year: "2026", image: "src/images/react certi.png" },
  { title: "AWS Solutions Architect", year: "2025", image: "src/images/aws.png" },
  { title: "JavaScript Certification", year: "2026", image: "src/images/js certificate.png" },
  { title: "Be 10x chatgpt and other AI tools certification", year: "2025", image: "src/images/ai.png" },
  { title: "Database power Bootcamp Certification", year: "2025", image: "src/images/dbp.png" },
  
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-19">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((cert, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-b from-blue-900 to-purple-00 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-slate-300">{cert.title}</h3>
              <span className="text-brandBlue font-mono text-sm text-slate-300">{cert.year}</span>
            </div>
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full rounded-lg shadow-md hover:cursor-zoom-in transition-all"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;