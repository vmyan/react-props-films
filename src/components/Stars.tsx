import { FC } from "react";
import { Star } from "./Star";

interface StarsProps {
  count?: number;
}

export const Stars: FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== "number" || count < 1 || count > 5) {
    return null;
  }

  const stars = Array.from({ length: count }, (_, i) => <Star key={i} />);

  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
};
