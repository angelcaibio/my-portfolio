import ProjectCard from "./Portfolio/ProjectCard";

const development = [
  "TypeScript",
  "JavaScript",
  "Dart",
  "PHP",
  "Python",
  "React",
  "Flutter",
  "Laravel",
  "Node.js"
];

const tools = [
  "Google Cloud",
  "Git",
  "Vite",
  "Framer Motion",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Canva"
];


export default function Works() {
  return (
    <div className="w-full max-w-3xl h-96 overflow-y-auto p-6 flex flex-col items-center scrollbar-none">
      <style>
        {`
          /* Hide scrollbar for all browsers */
          .scrollbar-none::-webkit-scrollbar { display: none; }
          .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold text-pink-300 mb-2 text-left">
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3 py-1.5 rounded-lg border border-pink-400/70 bg-black/20 text-gray-200 text-sm hover:bg-pink-400/10 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Development */}
        <div>
          <h3 className="text-lg font-semibold text-pink-300 mb-2 text-left">
            Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {development.map((d) => (
              <span
                key={d}
                className="inline-flex items-center px-3 py-1.5 rounded-lg border border-pink-400/70 bg-black/20 text-gray-200 text-sm hover:bg-pink-400/10 transition"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="w-full mt-6">
        <h3 className="text-lg font-semibold text-pink-300 mb-2 text-left">
          Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="Cabaddu Medical System"
            description="A Flutter and Firebase-based medical management system designed to streamline patient records and clinic operations."
            image="/cabaddu.png"
            link="mailto:angelnicoleasiscaibio@gmail.com?subject=Request Access to Cabaddu Medical System"
            isPrivate={true}
            status="Deployed"
          />

          <ProjectCard
            title="PalayPeste"
            description="A Flutter mobile app integrated with Firebase and YOLO, enabling farmers to detect rice diseases through AI-powered image recognition."
            image="/palay.png"
            link="mailto:angelnicoleasiscaibio@gmail.com?subject=Request Access to PalayPeste"
            isPrivate={true}
            status="Deployed"
          />
        </div>

      </div>
    </div>
  );
}
