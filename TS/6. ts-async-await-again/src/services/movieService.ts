import type { MovieExt } from "../models/MovieExt";
import type { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async (searchText: string) => {
  const response = await get<OmdbResponse>(`${BASE_URL}s=${searchText}`);
  localStorage.setItem("movies", JSON.stringify(response.Search));
  return response.Search;
};

export const getMovieById = async (id: string) => {
  return await get<MovieExt>(`${BASE_URL}i=${id}`);
};
