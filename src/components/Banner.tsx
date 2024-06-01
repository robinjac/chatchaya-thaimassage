// src/components/Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-screen h-full max-h-[500px] text-center text-white overflow-hidden">
      <img
        src="/src/assets/chatchaya_card.jpeg"
        alt="Hero"
        className="absolute w-full opacity-80"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">
        Chatchaya Thaimassage
      </h1>
    </div>
  );
};

export default Banner;