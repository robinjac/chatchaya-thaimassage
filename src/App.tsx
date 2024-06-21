import Banner from "./components/Banner.tsx";
import TherapyCard from "./components/TherapyCard.tsx";
import { AuroraBackground } from "./components/Background.tsx";
import { InfiniteMovingCards } from "./components/Carousel.tsx";

// Data
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
    <AuroraBackground className="h-fit">
      <div className="relative w-screen h-screen flex justify-between flex-col">
        <Banner />
        <div className="w-screen h-fit flex justify-center pb-6">
          <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
        </div>
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
            {bullets.map((bullet, key) => (
              <BulletItem key={key} {...bullet} />
            ))}
          </div>
        </section>
      </div>
      <div className="relative w-screen flex flex-col gap-12 py-10 items-center">
        {therapies.map(({ category, services }, index) => (
          <section
            key={crypto.randomUUID()}
            className="relative flex gap-20 justify-center w-screen space-y-8 sm:p-6"
          >
            <div className="flex flex-col items-center space-y-10">
              <h4 className="text-3xl text-center font-bold text-[#472c02] px-5">
                {category}
              </h4>
              {category === "Oljemassage med Varm Sten" && (
                <div className="h-[350px] bg-lime-50 shadow-lg w-screen sm:w-full sm:overflow-hidden sm:rounded-lg bg-[url(/src/assets/images/sten_massage.png)] bg-no-repeat bg-center bg-contain"></div>
              )}
              {category === "Hård Thaimassage" && (
                <div className="h-[350px] bg-lime-50 shadow-lg w-screen sm:w-full sm:overflow-hidden sm:rounded-lg bg-[url(/src/assets/images/hard_massage.png)] bg-no-repeat bg-center bg-contain"></div>
              )}
              {category === "Avslappnande Oljemassage" && (
                <div className="h-[350px] bg-lime-50 shadow-lg w-screen sm:w-full sm:overflow-hidden sm:rounded-lg bg-[url(/src/assets/images/olje_massage.png)] bg-no-repeat bg-center bg-contain"></div>
              )}

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((therapy) => (
                  <TherapyCard key={crypto.randomUUID()} {...therapy} />
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
