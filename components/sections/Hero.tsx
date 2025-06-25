'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="flex flex-col items-center text-center my-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="https://github.com/c-andriam.png" 
        alt="candriam" 
        className="w-32 h-32 rounded-full border-4 border-slate-700 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
        candriam
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 mt-2">
        Architecte de Systèmes Logiciels & Outils Open-Source
      </h2>
      <p className="mt-6 text-lg text-slate-300 max-w-xl">
        Je conçois des fondations logicielles robustes et des outils qui optimisent le travail des développeurs.
      </p>
      <div className="flex gap-4 mt-8">
        <a href="#projects" className="bg-sky-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-sky-500 transition-colors">
          Voir mes projets
        </a>
        <a href="/cv-candriam.pdf" download className="bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-md hover:bg-slate-600 transition-colors">
          Télécharger mon CV
        </a>
        <a href="#contact" className="bg-transparent border border-slate-600 text-slate-200 font-semibold px-6 py-3 rounded-md hover:bg-slate-800 transition-colors">
          Me contacter
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
