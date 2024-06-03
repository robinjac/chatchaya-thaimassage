// src/components/ReviewCard.jsx
import React from "react";


const ReviewCard = ({ review }) => {
  return (
    <div className="relative bg-gray-100 border border-gray-200 rounded-lg p-5 shadow-lg w-80">
      <p className="italic mb-2">"{review.text}"</p>
      <p className="text-right font-semibold">- {review.author}</p>
    </div>
  );
};

export default ReviewCard;
