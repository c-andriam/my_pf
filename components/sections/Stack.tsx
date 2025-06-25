// Importe tes icônes depuis 'react-icons/di' ou 'react-icons/si'
import { DiC, DiCplusplus, DiCsharp, DiDocker, DiGit, DiLinux } from 'react-icons/di';
import { SiGnubash, SiUnity } from 'react-icons/si';

const stack = {
  Langages: [
    { name: 'C', icon: <DiC /> },
    { name: 'C++', icon: <DiCplusplus /> },
    { name: 'C#', icon: <DiCsharp /> },
    { name: 'Bash', icon: <SiGnubash /> },
  ],
  Outils_Environnements: [
    { name: 'Linux', icon: <DiLinux /> },
    { name: 'Docker', icon: <DiDocker /> },
    { name: 'Git', icon: <DiGit /> },
    { name: 'Unity', icon: <SiUnity /> },
  ],
};

const Stack = () => (
  <section className="my-24">
    <h2 className="text-3xl font-bold mb-8 text-center">Technologies & Outils</h2>
    <div className="flex flex-col md:flex-row gap-12 justify-center">
      {Object.entries(stack).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-slate-300 mb-4 text-center">{category.replace('_', ' & ')}</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {items.map(item => (
              <div key={item.name} className="text-center group flex flex-col items-center">
                <div className="text-5xl text-slate-400 group-hover:text-sky-400 transition-colors">{item.icon}</div>
                <span className="mt-2 text-sm text-slate-400 group-hover:text-slate-200">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
