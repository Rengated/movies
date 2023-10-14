interface Element {
  nameRu: string;
  ratingKinopoisk: number;
  posterUrl: string;
  year: number;
  kinopoiskId: number;
}

export const formatResponse = (response: Array<Element>) => {
  const newArray = response.map((item: Element) => {
    return {
      title: item.nameRu,
      poster: item.posterUrl,
      rating: item.ratingKinopoisk,
      year: item.year,
      id: item.kinopoiskId,
    };
  });

  return newArray;
};
