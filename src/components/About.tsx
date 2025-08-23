export default function About() {
  return (
    <div className="w-full max-w-3xl h-96 overflow-y-auto p-6 flex flex-col items-center scrollbar-none">
      <style>
        {`
          /* Hide scrollbar for all browsers */
          .scrollbar-none::-webkit-scrollbar { display: none; }
          .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Profile Section */}
      <div className="flex flex-row w-full gap-6 mb-6">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/angel.png" // replace with your photo
            alt="Angel Nicole Caibio"
            className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-2 border-pink-400"
          />
        </div>

        {/* Name & Description */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-3xl font-bold text-pink-400">Angel Nicole Caibio</h2>
          <p className="text-gray-300 mt-1">
            PH-based Freelance Web & Mobile Developer • UX Designer
          </p>
        </div>
      </div>

      {/* About Me */}
      <div className="mb-6 text-left w-full">
        <p className="text-gray-300 font-medium mb-2">Here’s what I can offer...</p>
        <ul className="text-gray-300 list-disc list-inside space-y-1">
          <li>Cross-platform Development</li>
          <li>Web Development</li>
          <li>Machine Learning</li>
          <li>User Interface Design</li>
          <li>Graphic Design</li>
        </ul>
      </div>

      {/* Education */}
      <div className="text-left w-full">
        <h3 className="text-2xl font-semibold text-pink-300 mb-2">Education</h3>
        <p className="text-gray-300">
          Bachelor of Information Technology  
          <br />
          Central Luzon State University (2025 - Cum Laude)
        </p>
      </div>
    </div>
  );
}
