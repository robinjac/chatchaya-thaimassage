// src/components/TherapyCard.jsx
import React from "react";

const root = "https://www.bokadirekt.se";

interface Therapy {
  name: string;
  duration: string;
  price: string;
  link: string;
}

const TherapyCard = ({ name, duration, price, link }: Therapy) => {
  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-lg space-y-3 w-[350px]">
      <div className="rounded-lg bg-gray-200 bg-[url(/src/assets/images/chatchaya_card.jpeg)] bg-contain w-full h-[300px] bg-center bg-no-repeat"></div>
      <div>
        <h3 className="text-xl font-semibold text-wrap py-2">{name}</h3>
        <p>{duration}</p>
        <p>{price}</p>
      </div>

      <div>
        <a href={root + link}>Boka behandling</a>
      </div>
    </div>
  );
};

export default TherapyCard;
