import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";
import { Star } from "./Icons";

interface Item {
  review: string;
  createdAt: string;
  authorName: string;
  score: number;
}

const ReviewText = ({ reviewText }) => {
  const threshold = 200;
  const isLongText = reviewText.length > threshold;

  return (
    <div className="relative z-20 text-sm leading-[1.6] font-normal">
      {isLongText ? reviewText.slice(0, threshold) + "..." : reviewText}
    </div>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] flex flex-col justify-between gap-3 max-w-full bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-lg relative flex-shrink-0 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--gray-50), var(--gray-60)",
            }}
            key={idx}
          >
            <div
              aria-hidden="true"
              className="flex-none user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            />
            <ReviewText reviewText={item.review} />
            <div className="flex items-center w-full justify-between gap-1">
              <div className=" text-sm leading-[1.6] font-normal">
                {item.authorName}
              </div>
              <div className="flex gap-2 justify-between">
                {Array(item.score)
                  .fill(1)
                  .map(() => (
                    <Star className="text-amber-400 w-6" />
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
