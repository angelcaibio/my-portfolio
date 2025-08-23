import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Anime Portfolio Website",
    description: "React + TypeScript + Vite with sakura animation",
    image: "/hero.jpg",
    link: "https://github.com/yourname/anime-portfolio",
  },
  {
    title: "Rice Disease Detection",
    description: "Flutter app for farmers to detect rice diseases",
    image: "/palay.png",
    link: "https://github.com/yourname/rice-disease",
  },
    {
    title: "Anime Portfolio Website",
    description: "React + TypeScript + Vite with sakura animation",
    image: "/hero.jpg",
    link: "https://github.com/yourname/anime-portfolio",
  },
    {
    title: "Anime Portfolio Website",
    description: "React + TypeScript + Vite with sakura animation",
    image: "/hero.jpg",
    link: "https://github.com/yourname/anime-portfolio",
  },
  
];

export default function ProjectList() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-900/70">
      <h2 className="text-4xl font-bold text-pink-400 mb-8 text-center">
        🌸 My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
