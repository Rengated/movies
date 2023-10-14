import movieApi from "../../../http";

export const getMovies = async (page: number) => {
  return await movieApi
    .get(
      `films?order=RATING&type=ALL&ratingFrom=5&ratingTo=10&yearFrom=2000&yearTo=3000&page=${page}`
    )
    .then((response) => response.data);
};
