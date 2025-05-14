"use client";

import { Star } from "lucide-react";

interface RatingProps {
  value: number; // e.g. 4.3
  count?: number; // optional, e.g. 25 reviews
}

const Rating = ({ value, count }: RatingProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />);
    } else if (value >= i - 0.5) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-500 opacity-75" />
      );
    } else {
      stars.push(
        <Star key={i} className="w-5 h-5 text-gray-300 stroke-gray-400" />
      );
    }
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex">{stars}</div>
      <span className="text-gray-600 font-medium">{value.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-gray-500">({count} reviews)</span>
      )}
    </div>
  );
};

export default Rating;
