import { useParams } from "react-router-dom";
import { getMovieById } from "./http";
import { Layout } from "../../layouts/layout";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { Button } from "@mui/material";
import { useComments } from "./hooks/useComments";
import star from "../../assets/icons/star.svg";
import { Review } from "./components/Review/Review";
import "../../assets/styles/movie.scss";

interface Information {
  coverUrl: string;
  ratingKinopoisk: number;
  webUrl: string;
  nameRu: string;
  filmLength: number;
  description: string;
  posterUrl: string;
  year: number;
  genres: [
    {
      genre: string;
    }
  ];
}

interface Comment {
  name: string;
  rating: number;
  comment: string;
}

export const Movie = () => {
  const [information, setInformation] = useState<Information>();
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const comments = useComments({ id: id });

  useEffect(() => {
    const fetch = async () => {
      const response = await getMovieById(Number(id));
      setInformation(response);
    };

    if (id) {
      fetch();
    }
  }, [id]);

  return (
    <Layout>
      <Modal
        show={show}
        setShow={setShow}
        id={Number(id)}
      />
      <div className="container movie">
        <div
          style={{ backgroundImage: `url(${information?.coverUrl})` }}
          className="movie-poster">
          <div className="movie__name">{information?.nameRu}</div>
        </div>
        <div className="movie-data">
          <img
            src={information?.posterUrl}
            alt=""
            className="movie-picture"
          />
          <div className="movie-data-list">
            <p className="movie-data__title">{information?.nameRu}</p>
            <p className="movie-data__description">
              {information?.description}
            </p>
            <div className="movie-data__rating">
              <img
                src={star}
                alt="star"
                className=""
              />
              <span>{information?.ratingKinopoisk}</span>
            </div>
            <div className="movie-data-property">
              <p className="movie-data-property__title">type</p>
              <p className="movie-data-property__value">Movie</p>
            </div>
            <div className="movie-data-property">
              <p className="movie-data-property__title">release Date:</p>
              <p className="movie-data-property__value">{information?.year}</p>
            </div>
            <div className="movie-data-property">
              <p className="movie-data-property__title">run time</p>
              <p className="movie-data-property__value">
                {information?.filmLength} min
              </p>
            </div>
            <div className="movie-data-property">
              <p className="movie-data-property__title">genres</p>
              <p className="movie-data-property__value">
                {information?.genres.map((item, index) => (
                  <span key={index}>{" " + item.genre}</span>
                ))}
              </p>
            </div>
            <Button
              variant="contained"
              onClick={() => setShow(true)}>
              Оставить отзыв
            </Button>
          </div>
        </div>
        <div className="container">
          <p className="movie-reviews__title">Отзывы</p>
          {comments?.map((comment: Comment, index) => (
            <Review {...comment} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
