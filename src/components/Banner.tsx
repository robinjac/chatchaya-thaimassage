import React from "react";

const Banner = () => {
  return (
    <div className="relative text-[#6d4901] flex justify-center items-center flex-col w-screen h-2/3">
      <div className="w-full h-1/3 bg-[url(/src/assets/images/bird.png)] bg-center bg-no-repeat bg-contain"></div>
      <div className="w-full h-2/3 bg-[url(/src/assets/images/logo2.png)] bg-center bg-no-repeat bg-contain"></div>
      <h1 className="text-5xl w-full text-center drop-shadow-lg pt-4 pt-8 px-12">
        Chatchaya Thaimassage
      </h1>
      <div className="flex gap-2 pt-6 lg:pt-12">
        <a
          href="https://g.co/kgs/GWU8n3E"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="inline-flex h-full text-[#472c02] w-full cursor-pointer items-center justify-center bg-transparent rounded-full px-3 py-1 font-medium backdrop-blur-3xl">
            Hitta hit
          </span>
        </a>
        <a
          href="https://www.bokadirekt.se/places/chat-cha-ya-thaimassage-58430"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="inline-flex h-full text-[#472c02] w-full cursor-pointer items-center justify-center bg-slate-50 rounded-full px-3 py-1 font-medium backdrop-blur-3xl">
            Boka direkt
          </span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
