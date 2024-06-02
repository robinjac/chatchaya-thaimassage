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
      <AuroraBackground className="bg-lime-50">
        <Banner />
      </AuroraBackground>
      <div className="relative w-screen min-h-screen pt-20">
        {therapies.map(({ category, services }, index) => (
          <section
            key={category + index}
            className="relative flex flex-col items-center w-screen space-y-8 p-6"
          >
            <h2 className="text-3xl font-bold">{category}</h2>
            <div className="grid gap-4 grid-cols-1">
              {services.map((therapy) => (
                <TherapyCard key={therapy.name + index} {...therapy} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="relative flex flex-col items-center w-screen space-y-8 p-6">
        <h2 className="text-3xl font-bold text-center">Rekommendationer</h2>
        <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      </section>
    </>
  );
};

export default App;
