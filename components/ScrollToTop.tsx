"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

  
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScroll(scrolled);
      setVisible(winScroll > 200);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); 

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 17;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (circumference * scroll) / 100;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-[999] right-5 bottom-5 size-10 rounded-full
      cursor-pointer bg-bodybg text-white
      duration-500 flex items-center justify-center
      ${
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-0 pointer-events-none"
      }`}
    >
      <svg className="w-full h-full pointer-events-none absolute top-0 left-0 -rotate-90">
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isNaN(offset) ? 0 : offset}
          strokeLinecap="round"
        />
      </svg>

      <span className="icon text-xs relative z-1 text-secondary">
        <i className="fa-solid fa-chevron-up"></i>
      </span>
    </button>
  );
}