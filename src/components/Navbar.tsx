import { useState, useRef, useEffect } from "react";
import { BiPlay, BiPause, BiDownload } from "react-icons/bi";

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Track scroll to change navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center z-50 transition-colors duration-300 ${
        isTop
          ? "bg-black/0 backdrop-blur-none"
          : "bg-gradient-to-b from-black/50 to-black/20 backdrop-blur-xl"
      }`}
    >
      {/* Logo */}
      <a href="#home" className="relative group">
        <img
          src="/logo.png"
          alt="Nicole Logo"
          className="h-14 sm:h-16 md:h-20 transition-transform hover:scale-110"
        />
      </a>

      {/* Icons */}
      <ul className="flex gap-3 sm:gap-4 md:gap-6 items-center">
        <li>
          <button
            onClick={toggleMusic}
            className="text-pink-300 text-xl sm:text-3xl md:text-5xl hover:text-pink-400 transition-transform hover:scale-125"
          >
            {isPlaying ? <BiPause className="animate-pulse" /> : <BiPlay />}
          </button>
        </li>

        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 text-xl sm:text-2xl md:text-3xl hover:text-pink-400 transition-transform hover:scale-125"
          >
            <BiDownload />
          </a>
        </li>
      </ul>

      {/* Audio element */}
      <audio ref={audioRef} loop src="/lofi.mp3" />
    </nav>
  );
}
