// src/App.jsx
import React from "react";
import Banner from "./components/Banner.tsx";
import TherapyCard from "./components/TherapyCard.tsx";
import { AuroraBackground } from "./components/Background.tsx";
import { InfiniteMovingCards } from "./components/Carousel.tsx";
import therapies from "./assets/data/therapies.json";
import reviews from "./assets/data/review.json";
import bullets from "./assets/data/bullets.json";

const BulletItem = (props: { bullet: string; paragraph: string }) => (
  <>
    <h4 className="text-2xl font-bold">{props.bullet}</h4>
    <p>{props.paragraph}</p>
  </>
);

const App = () => {
  return (
    <>
      <AuroraBackground className="z-0">
        <Banner />
        <div className="w-screen flex justify-center mt-auto lg:pb-8">
          <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
        </div>
      </AuroraBackground>

      <div className="relative w-screen flex flex-col items-center">
        <section className="relative text-[#472c02] max-w-5xl flex gap-20 justify-center w-screen space-y-8 p-6">
          <div className="w-[400px] rounded-full shadow-inner-circle bg-[url(/src/assets/images/chatchaya_left_2.png)] bg-no-repeat bg-contain" />
          <div className="flex flex-col items-start w-[500px] space-y-6">
            <h4 className="text-3xl font-bold">Vad är Thailänsk massage?</h4>
            <p>
              Det är en holistisk behandlingsmetod som främjar både fysisk och
              mental hälsa genom att integrera stretching, tryck och
              andningsövningar.
            </p>
            {bullets.map((bullet) => (
              <BulletItem {...bullet} />
            ))}
          </div>
        </section>
      </div>
      <div className="relative w-screen flex flex-col gap-12 py-20 items-center">
        {therapies.map(({ category, services }, index) => (
          <section
            key={category + index}
            className="relative max-w-5xl flex gap-20 justify-center w-screen space-y-8 p-6"
          >
            <div className="flex flex-col items-start space-y-12">
              <h2 className="text-4xl text-center text-[#472c02]">
                {category}
              </h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
