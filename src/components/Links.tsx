export default function Links() {
  const socialLinks = [
    { label: "Facebook", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png?20140103173026", href: "https://facebook.com/angelcaibio" },
    { label: "LinkedIn", icon: "https://store-images.s-microsoft.com/image/apps.46485.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.df3dbdf7-e6b9-4d2a-a5ad-3b91e430d172", href: "https://www.linkedin.com/in/angelcaibio/" },
    { label: "Github", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", href: "https://github.com/angelcaibio" },
    { label: "Fiverr", icon: "https://vectorseek.com/wp-content/uploads/2021/02/vectorseek.com-Fiverr-Logo-Vector.png", href: "https://fiverr.com" },
    { label: "Upwork", icon: "https://images.icon-icons.com/2699/PNG/512/upwork_logo_icon_170310.png", href: "https://www.upwork.com/freelancers/~01cd4ed3c7f8a05ee8" },
    { label: "OLJ", icon: "https://offshoring.com.ph/wp-content/uploads/2019/01/PID-3672-logo-onlinejobs-e1546997588895.png", href: "https://www.onlinejobs.ph/jobseekers/info/2117143" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-1 flex flex-col items-center gap-4 text-left">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-400 drop-shadow text-left self-start">
        connect with me! 
      </h2>
      {/* Mobile scrollable list */}
      <div className="flex flex-col gap-3 sm:hidden overflow-y-auto max-h-72 scrollbar-none w-full px-1">
        <style>
          {`
            .scrollbar-none::-webkit-scrollbar { display: none; }
            .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 border border-pink-300 rounded-xl p-3 bg-black/30 backdrop-blur-sm hover:bg-pink-400/10 transition-all duration-300 shadow"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-black/40 rounded-full p-1">
              <img src={link.icon} alt={link.label} className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-100 text-sm font-medium">
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:grid grid-cols-3 gap-4 w-full">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 hover:scale-105 transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-full p-2">
              <img src={link.icon} alt={link.label} className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-100 text-sm font-semibold text-center">
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Footer note */}
      <p className="hidden sm:block text-pink-400 text-xs sm:text-sm mt-4 px-4 py-2 border border-pink-400 rounded-md bg-black/20 backdrop-blur-sm text-center shadow">
        click on any card to explore my profile!
      </p>
    </div>
  );
}
