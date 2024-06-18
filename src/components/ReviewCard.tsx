type Review = {
  text: string;
  author: string;
};

const ReviewCard = ({ text, author }: Review) => {
  return (
    <div className="relative bg-gray-100 border border-gray-200 rounded-lg p-5 shadow-lg w-80">
      <p className="italic mb-2">"{text}"</p>
      <p className="text-right font-semibold">- {author}</p>
    </div>
  );
};

export default ReviewCard;
