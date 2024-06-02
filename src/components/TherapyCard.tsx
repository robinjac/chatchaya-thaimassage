// src/components/TherapyCard.jsx
import React from "react";

const root = "https://www.bokadirekt.se/";

interface Therapy {
  name: string;
  duration: string;
  price: string;
  link: string;
}

const TherapyCard = ({ name, duration, price, link }: Therapy) => {
  return (
    <div className="relative bg-gray-100 border border-gray-200 rounded-lg p-5 shadow-lg w-80">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p>{duration}</p>
      <p>{price}</p>
      <a href={root + link}></a>
    </div>
  );
};

export default TherapyCard;
