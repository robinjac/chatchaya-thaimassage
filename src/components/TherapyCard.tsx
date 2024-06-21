const root = "https://www.bokadirekt.se";

type Therapy = {
  name: string;
  duration: string;
  price: string;
  link: string;
};

const TherapyCard = ({ name, duration, price, link }: Therapy) => {
  return (
    <div className="relative text-[#472c02] bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-lg space-y-3 w-[280px]">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-wrap py-2">{duration}</h3>
        <p>{price}</p>
      </div>

      <div className="flex justify-end items-center">
        <a
          href={root + link}
          className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full text-sm text-[#472c02] bg-lime-50 w-full cursor-pointer items-center justify-center rounded-full px-3 backdrop-blur-3xl">
            Boka behandling
          </span>
        </a>
      </div>
    </div>
  );
};

export default TherapyCard;
