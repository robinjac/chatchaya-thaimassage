// src/components/Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <div className="relative text-center text-white">
      <img
        src="/src/assets/hero.jpg"
        alt="Hero"
        className="w-full h-auto opacity-80"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">
        Welcome to Our Massage Therapy Center
      </h1>
    </div>
  );
};

export default Banner;
