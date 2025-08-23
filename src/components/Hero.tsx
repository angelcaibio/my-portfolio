import { useState, useEffect } from "react";
import About from "./About";
import Links from "./Links";
import Contact from "./Contact";
import Works from "./Works";

export default function Hero() {
  const videos = ["/hero1.mp4", "/hero2.mp4", "/hero3.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(true);
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Draggable state
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timer);
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setFade(true);
    }, 500);
  };

  const tabs = [
    { label: "About", icon: "/icons/heart.svg" },
    { label: "Works", icon: "/icons/work.svg" },
    { label: "Links", icon: "/icons/link.svg" },
    { label: "Contact", icon: "/icons/mail.svg" },
  ];

  const renderPopupContent = (name: string) => {
    switch (name) {
      case "About":
        return <About />;
      case "Links":
        return <Links />;
      case "Contact":
        return <Contact />;
      case "Works":
        return <Works />;
      default:
        return <p className="text-gray-300">Coming soon!</p>;
    }
  };

  // Drag handlers
  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        key={currentVideo}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Desktop Window Hero */}
      <div className="hidden sm:flex relative z-10 w-11/12 md:w-2/3 lg:w-1/2 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden flex-col items-center">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-2 w-full bg-pink/40 border-b border-white/20">
          <div className="text-white/70 font-medium text-sm sm:text-base">Hello World</div>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse delay-100"></span>
            <span className="w-3 h-3 rounded-full bg-red-400 animate-pulse delay-200"></span>
          </div>
        </div>

        {/* Heading & Tabs */}
        <div className="px-6 sm:px-8 md:px-10 py-10 flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-pink-400 drop-shadow-lg tracking-wide">
            I'm <span className="text-white/90">Angel Nicole</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            Web & Mobile Developer • UX Designer
          </p>

          <div className="mt-10 flex justify-center gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setOpenPopup(tab.label)}
                className="flex flex-col items-center gap-4 text-gray-200 hover:text-pink-400 transition-transform duration-300 transform hover:scale-110"
              >
                <img src={tab.icon} alt={tab.label} className="w-14 h-14 sm:w-16 sm:h-16" />
                <span className="text-base sm:text-lg font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {openPopup && (
       <div
          className="hidden sm:flex absolute z-20 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex-col"
          style={{
            top: position.y,
            left: position.x,
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex-col flex w-full">
            <div
              className="flex justify-between items-center px-4 py-2 w-full bg-pink/40 border-b border-white/20 cursor-move"
              onMouseDown={(e) => {e.stopPropagation(); // prevent hero/video from reacting
                startDrag(e);
              }}
            >
              <div className="text-white/70 font-medium text-sm sm:text-base">{openPopup}</div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse delay-100"></span>
                <span
                  className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setOpenPopup(null)}
                ></span>
              </div>
            </div>

            {/* Popup Content */}
            <div className="px-6 py-6 flex flex-col items-center text-center">
              {renderPopupContent(openPopup)}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Sheet */}
      {openPopup && (
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black/90 border-t border-pink-400 rounded-t-xl p-6 z-50">
          <button onClick={() => setOpenPopup(null)} className="absolute top-2 right-2 w-6 h-6  rounded-full text-white font-bold">[x]</button>
          <h2 className="text-1xl mb-4 text-white-400 text-left">{openPopup}</h2>{renderPopupContent(openPopup)}
        </div>
      )}

      {/* Mobile Hero */}
      <div className="sm:hidden relative z-10 flex flex-col items-center text-center px-6 mt-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-300 drop-shadow-lg tracking-wide">
          I'm <span className="text-white/90">Angel Nicole</span>
        </h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
          Web & Mobile Developer • UX Designer
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setOpenPopup(tab.label)}
              className="flex flex-col items-center gap-2 text-white-900 bg-pink-300/20 rounded-xl px-4 py-4 transition-transform duration-300 transform hover:scale-105 hover:bg-pink-300/40"
            >
              <img src={tab.icon} alt={tab.label} className="w-14 h-14 sm:w-16 sm:h-16" />
              <span className="text-sm sm:text-base font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
