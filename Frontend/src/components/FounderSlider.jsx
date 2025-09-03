import React, { useState, useEffect } from "react";

const FounderSlider = ({ founders }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % founders.length);
    }, 4000); // 2s pause + ~2s transition
    return () => clearInterval(interval);
  }, [founders.length]);

  return (
    <div className="relative w-full overflow-hidden h-[60vh] flex items-center justify-center">
      {founders.map((founder, index) => (
        <div
          key={founder.id}
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-in-out
            ${index === current ? "translate-x-0" : index < current ? "-translate-x-full" : "translate-x-full"}
          `}
        >
          <div className="relative group cursor-pointer">
            {/* Normal Image */}
            <img
              src={founder.imageNormal}
              alt={founder.name}
              className="max-h-[60vh] w-auto object-contain grayscale transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            {/* Hover Image */}
            <img
              src={founder.imageHover}
              alt={`${founder.name} hover state`}
              className="max-h-[60vh] w-auto object-contain grayscale absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FounderSlider;
