import React from "react"

const Banner = () => {
  return (
    <div className="relative flex justify-center items-center flex-col gap-6 w-screen h-screen max-h-[400px]">
      <h1 className="text-5xl w-full text-center px-12">Chatchaya Thaimassage</h1>
      <div className="flex gap-2">
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Hitta hit
        </button>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Boka direkt
        </button>
      </div>
    </div>
  );
};

export default Banner;
