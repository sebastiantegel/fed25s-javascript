// Create function for CRUD operations

import type { Movie } from "../models/movie/Movie";
import type { OmdbResponse } from "../models/movie/OmdbResponse";
import { get } from "./serviceBase";

export const getMovies = async (searchText: string) => {
  const omdbResponse = await get<OmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=" + searchText,
  );
  return omdbResponse.Search;
};

export const getMovieById = async (id: string) => {
  const omdbResponse = await get<Movie>(
    "https://omdbapi.com/?apikey=416ed51a&i=" + id,
  );
  return omdbResponse;
};
