import { createHtml } from "./htmlUtils";
import type { Movie } from "./models/Movie";
import { getMovies } from "./services/movieService";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText");

  let searchText = "";
  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }

  const movies = await getMovies(searchText);
  createHtml(movies);

  if (theInput) {
    (theInput as HTMLInputElement).value = "";
  }
});

const movies: Movie[] = JSON.parse(localStorage.getItem("movies") || "[]");
createHtml(movies);
