// src/App.jsx
import React from "react";
import Banner from "./components/Banner.tsx";
import TherapyCard from "./components/TherapyCard.tsx";
import ReviewCard from "./components/ReviewCard.tsx";
import Footer from "./components/Footer.tsx";
import { AuroraBackground } from "./components/Background.tsx";
import { InfiniteMovingCards } from "./components/Carousel.tsx";

const therapies = [
  { name: "Swedish Massage", description: "Relaxing and rejuvenating." },
  { name: "Deep Tissue Massage", description: "Focused and intense." },
  { name: "Hot Stone Massage", description: "Soothing and calming." },
  { name: "Aromatherapy Massage", description: "Invigorating and refreshing." },
];

/* const reviews = [
  { text: "Amazing service!", author: "John Doe" },
  { text: "Best massage ever!", author: "Jane Smith" },
  { text: "Very relaxing experience.", author: "Alice Johnson" },
  { text: "Highly recommend!", author: "Bob Brown" },
]; */

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  
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
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </section>

      <Footer />
    </AuroraBackground>
  );
};

export default App;
