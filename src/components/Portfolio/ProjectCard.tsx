type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  isPrivate?: boolean; // default = false
  status?: "Deployed" | "Offline"; // optional status
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  isPrivate = false,
  status = "Deployed",
}: Props) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 hover:shadow-pink-400/20 transition duration-300 flex flex-col">
      {/* Image with overlay */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition"></div>

        {/* Status Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${
            status === "Deployed"
              ? "bg-green-500/80 text-white"
              : "bg-gray-500/80 text-white"
          }`}
        >
          {status}
        </span>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-2 line-clamp-2">{description}</p>

        {isPrivate ? (
          <a
            href={`mailto:angelnicoleasiscaibio@email.com?subject=Request Access to ${title}`}
            className="mt-4 inline-flex items-center text-sm font-medium text-yellow-400 hover:text-yellow-300 transition"
          >
            Request Access →
          </a>
        ) : (
          <a
            href={link}
            target="_blank"
            className={`mt-4 inline-flex items-center text-sm font-medium ${
              status === "Deployed"
                ? "text-pink-400 hover:text-pink-300"
                : "text-gray-400 cursor-not-allowed"
            } transition`}
            {...(status === "Offline" ? { onClick: (e) => e.preventDefault() } : {})}
          >
            {status === "Offline" ? "Unavailable" : "View Project →"}
          </a>
        )}
      </div>
    </div>
  );
}
