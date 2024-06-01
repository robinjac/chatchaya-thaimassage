// src/components/TherapyCard.jsx
import React from "react";

const TherapyCard = ({ therapy }) => {
  return (
    <div className="relative bg-gray-100 border border-gray-200 rounded-lg p-5 shadow-lg w-80">
      <h3 className="text-xl font-semibold mb-2">{therapy.name}</h3>
      <p>{therapy.description}</p>
    </div>
  );
};

export default TherapyCard;
