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
    <AuroraBackground className="h-fit bg-lime-50">
      <div className="relative w-screen h-screen flex justify-between flex-col">
        <Banner />
        <div className="w-screen h-fit flex justify-center pb-6">
          <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
        </div>
        <div className="absolute bottom-0 h-[40%] bg-[url(/src/assets/images/flower.png)] w-full bg-left bg-no-repeat bg-contain"></div>
      </div>
      <div className="relative w-screen flex flex-col items-center">
        <section className="relative text-[#472c02] max-w-5xl flex gap-20 justify-center w-screen space-y-8 p-6">
          <div className="w-[400px] hidden lg:flex rounded-full shadow-inner-circle bg-[url(/src/assets/images/chatchaya_left_2.png)] bg-no-repeat bg-contain" />
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
      <div className="relative w-screen flex flex-col gap-12 py-10 items-center">
        {therapies.map(({ category, services }, index) => (
          <section
            key={category + index}
            className="relative flex gap-20 justify-center w-screen space-y-8 p-6"
          >
            <div className="flex flex-col items-center space-y-10">
              <h4 className="text-3xl text-center font-bold text-[#472c02]">{category}</h4>
              <div className="h-[400px] w-full bg-[url(/src/assets/images/hard_massage.png)] bg-no-repeat bg-center bg-contain"></div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((therapy) => (
                  <TherapyCard key={therapy.name + index} {...therapy} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </AuroraBackground>
  );
};

export default App;
