const Stats = () => (
  <section className="my-24">
    <h2 className="text-3xl font-bold mb-8 text-center">Mon Activité Open Source</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img src="https://github-readme-stats.vercel.app/api?username=c-andriam&show_icons=true&theme=transparent&text_color=e6edf3&title_color=58a6ff&icon_color=58a6ff&hide_border=true" alt="GitHub Stats"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=c-andriam&layout=compact&theme=transparent&text_color=e6edf3&title_color=58a6ff&hide_border=true" alt="Top Languages"/>
      <img className="md:col-span-2" src="https://github-readme-streak-stats.herokuapp.com/?user=c-andriam&theme=dark&hide_border=true" alt="GitHub Streak"/>
    </div>
  </section>
);

export default Stats;
