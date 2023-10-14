import { useNavigate } from "react-router-dom";
import star from "../../../../assets/icons/star.svg";
import "./Card.scss";

export interface CardProps {
  title: string;
  rating: number;
  year: number;
  poster: string;
  id: number;
}

export const Card = ({ title, poster, rating, year, id }: CardProps) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div
      className="card"
      onClick={onCardClick}>
      <div className="card-rating">
        <img
          className="card-rating__icon"
          src={star}
          alt="star"
        />
        <span className="card-rating__value">{rating}</span>
      </div>
      <img
        className="card__poster"
        src={poster}
        alt="poster"
      />
      <p className="card__title">
        {title}, {year}
      </p>
    </div>
  );
};
