import { Rating } from "@mui/material";
import "./Review.scss";

interface ReviewProps {
  rating: number;
  comment: string;
  name: string;
}

export const Review = ({ rating, comment, name }: ReviewProps) => {
  return (
    <div className="review">
      <div className="review-header">
        <p className="review-header__name"> {name}</p>
        <Rating
          value={rating}
          readOnly
        />
      </div>

      <p className="review-header__comment">{comment}</p>
    </div>
  );
};
