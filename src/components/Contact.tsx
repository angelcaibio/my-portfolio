import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "angelnicoleasiscaibio@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 flex flex-col items-center gap-3">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-400 drop-shadow text-left self-start">
        yay mail! ✉️
      </h2>

      <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left w-full">
        the easiest way to contact me is through email! I don&apos;t really check my
        social media messages, so please direct questions to my email instead 👍
      </p>

      <div className="w-50 h-50 sm:w-60 sm:h-60">
        <DotLottieReact
          src="https://lottie.host/e3243167-f5ba-4bfb-b83f-e2372e9a104e/seqxnEQSRh.lottie"
          loop
          autoplay
        />
      </div>

      {/* Email highlight with tooltip */}
      <div className="relative group">
        <button
          onClick={copyToClipboard}
          className="text-gray-200 text-sm sm:text-base"
        >
          email me at:{" "}
          <span className="text-pink-400 font-semibold hover:text-pink-300 transition">
            {email}
          </span>
        </button>

        {/* Tooltip */}
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-gray-200 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
          {copied ? "Copied!" : "Copy to clipboard"}
        </span>
      </div>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 px-5 py-2 rounded-lg bg-pink-400/20 border border-pink-400 text-pink-300 font-semibold hover:bg-pink-400/30 transition shadow"
      > send me an email
      </a>
    </div>
  );
}
