import movieApi from "../../../http";

export const getMovieById = async (id: Number) => {
  return await movieApi.get(`films/${id}`).then((response) => response.data);
};
