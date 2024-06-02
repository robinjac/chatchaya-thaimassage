// src/App.jsx
import React from "react";
import Banner from "./components/Banner.tsx";
import TherapyCard from "./components/TherapyCard.tsx";
import Footer from "./components/Footer.tsx";
import { AuroraBackground } from "./components/Background.tsx";
import { InfiniteMovingCards } from "./components/Carousel.tsx";
import therapies from "./assets/data/therapies.json";
import reviews from "./assets/data/review.json";

const App = () => {
  return (
    <>
      <AuroraBackground>
        <Banner />
      </AuroraBackground>
      <div className="relative w-screen h-screen">
        {therapies.map(({ category, services }, index) => (
          <section
            key={category + index}
            className="relative flex flex-col items-center w-screen space-y-8 p-6"
          >
            <h2 className="text-3xl font-bold">{category}</h2>
            <div className="grid w-fit gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((therapy) => (
                <TherapyCard key={index} {...therapy} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="relative flex flex-col items-center w-screen space-y-8 p-6">
        <h2 className="text-3xl font-bold text-center">Reviews</h2>
        <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      </section>

      <Footer />
    </>
  );
};

export default App;
