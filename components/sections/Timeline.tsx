const timelineData = [
  { year: '2021', event: 'Début de mon aventure à 42 Antananarivo, immersion dans l\'univers C et Unix.' },
  { year: '2022', event: 'Développement de mes premiers projets systèmes : shell custom, malloc, etc.' },
  { year: '2023', event: 'Exploration du C++, de la POO et des design patterns. Contribution à des projets open-source.' },
  { year: '2024', event: 'Plongée dans le DevOps avec Docker. Développement d\'outils en C# et exploration de Unity.' },
  { year: '2025', event: 'Focus sur l\'optimisation de performance et l\'architecture de systèmes distribués.' },
];

const Timeline = () => {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Mon Parcours Technique</h2>
      <div className="relative border-l-2 border-slate-700 ml-4">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-8 ml-8 relative">
            <div className="absolute -left-10 w-6 h-6 bg-sky-600 rounded-full border-4 border-slate-800"></div>
            <p className="font-mono text-sky-400">{item.year}</p>
            <p className="text-slate-300">{item.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
