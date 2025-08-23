import { useEffect } from "react";

export default function Sakura() {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "sakura";
      petal.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 10000);
    };

    const interval = setInterval(createPetal, 500);
    return () => clearInterval(interval);
  }, []);

  return null;
}
