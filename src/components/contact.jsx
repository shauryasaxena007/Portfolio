import React from 'react';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="max-w-3xl mx-auto px-6 py-12 bg-gradient-to-br from-blue-300 to-purle-700 rounded-3xl text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something together!</h2>
        <p className="text-blue-100 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:shauryasaxena147@gmail.com" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition">
            <FaEnvelope /> Email Me
          </a>
          <a href="https://wa.me/917839256353" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;