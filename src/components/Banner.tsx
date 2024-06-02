import React from "react"

const Banner = () => {
  return (
    <div className="relative flex justify-center items-center flex-col gap-6 w-screen h-screen max-h-[420px] pb-32">
    <div className="bg-[url(/src/assets/images/logo.png)] bg-center w-full h-full bg-no-repeat bg-contain"></div>
      <h1 className="text-5xl w-full text-[rgb(161,144,41)] text-center px-12">Chatchaya Thaimassage</h1>
      <div className="flex gap-2">
        <a href="https://g.co/kgs/GWU8n3E" className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Hitta hit
        </a>
        <a href="https://www.bokadirekt.se/places/chat-cha-ya-thaimassage-58430" className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Boka direkt
        </a>
      </div>
    </div>
  );
};

export default Banner;
