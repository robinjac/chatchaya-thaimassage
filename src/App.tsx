// src/App.jsx
import React from "react";
import Banner from "./components/Banner.tsx";
import TherapyCard from "./components/TherapyCard.tsx";
import { AuroraBackground } from "./components/Background.tsx";
import { InfiniteMovingCards } from "./components/Carousel.tsx";
import therapies from "./assets/data/therapies.json";
import reviews from "./assets/data/review.json";

const App = () => {
  return (
    <>
      <AuroraBackground>
        <Banner />

        <div className="w-screen flex justify-center mt-auto lg:pb-8">
          <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
        </div>
      </AuroraBackground>
      <div className="relative w-screen min-h-screen flex flex-col items-center  pt-20">
        {therapies.map(({ category, services }, index) => (
          <section
            key={category + index}
            className="relative max-w-5xl flex gap-20 justify-center w-screen space-y-8 p-6"
          >
            <div className="w-[400px] bg-[url(/src/assets/images/chatchaya_left_2.png)] bg-no-repeat bg-contain" />
            <div className="flex flex-col items-center w-[300px] space-y-10">
              <h2 className="text-4xl text-center text-[#472c02]">{category}</h2>
              <div className="grid gap-4 grid-cols-1">
                {services.map((therapy) => (
                  <TherapyCard key={therapy.name + index} {...therapy} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default App;
