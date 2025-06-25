'use client';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, stack, link }) => {
  return (
    <motion.div 
      className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col"
      whileHover={{ scale: 1.03, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)' }}
    >
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
      <p className="text-slate-400 mt-2 flex-grow">{description}</p>
      <div className="flex gap-2 mt-4">
        {stack.map(tech => (
          <span key={tech} className="bg-slate-700 text-xs font-mono text-sky-400 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-sky-500 mt-4 font-semibold self-start hover:underline">
        Voir le code source &rarr;
      </a>
    </motion.div>
  );
};

export default ProjectCard;
