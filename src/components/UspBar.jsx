"use client";

import { useEffect, useState } from "react";

const usps = [
  { label: "5.0", sub: "Score" },
  { label: "400+", sub: "Reviews" },
  { label: "Premium", sub: "Producten" },
  { label: "Brugge", sub: "Centrum" },
];

export default function UspBar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${
        stuck
          ? "fixed top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm"
          : "relative bg-cream"
      } transition-all duration-300`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-around py-3 px-4">
        {usps.map((usp) => (
          <div key={usp.label} className="text-center">
            <span className="text-lg md:text-xl font-heading font-bold text-gold">
              {usp.label}
            </span>
            <span className="hidden sm:inline text-xs text-charcoal-light ml-1.5">
              {usp.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
