// src/App.jsx
import React from "react";
import Banner from "./components/Banner.tsx";
import TherapyCard from "./components/TherapyCard.tsx";
import ReviewCard from "./components/ReviewCard.tsx";
import Footer from "./components/Footer.tsx";
import { AuroraBackground } from "./components/Background.tsx";

const therapies = [
  { name: "Swedish Massage", description: "Relaxing and rejuvenating." },
  { name: "Deep Tissue Massage", description: "Focused and intense." },
  { name: "Hot Stone Massage", description: "Soothing and calming." },
  { name: "Aromatherapy Massage", description: "Invigorating and refreshing." },
];

const reviews = [
  { text: "Amazing service!", author: "John Doe" },
  { text: "Best massage ever!", author: "Jane Smith" },
  { text: "Very relaxing experience.", author: "Alice Johnson" },
  { text: "Highly recommend!", author: "Bob Brown" },
];

const App = () => {
  return (
    <AuroraBackground>
      <Banner />

      <section className="relative container w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Massage Therapies
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {therapies.map((therapy, index) => (
            <TherapyCard key={index} therapy={therapy} />
          ))}
        </div>
      </section>

      <section className="relative container w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Reviews</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </section>

      <Footer />
    </AuroraBackground>
  );
};

export default App;
