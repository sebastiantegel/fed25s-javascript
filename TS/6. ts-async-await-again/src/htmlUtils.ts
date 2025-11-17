import type { Movie } from "./models/Movie";
import { getMovieById } from "./services/movieService";

export const createHtml = (movies: Movie[]) => {
  const moviesSection = document.getElementById("movies");

  if (moviesSection) {
    moviesSection.innerHTML = "";
  }

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");

    img.src = movie.Poster;
    img.alt = movie.Title;
    title.innerHTML = movie.Title;
    imgContainer.className = "imgContainer";

    movieContainer.addEventListener("click", async () => {
      const movieDetails = await getMovieById(movie.imdbID);
      console.log(movieDetails);
    });
    movieContainer.className = "movie";

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);
    moviesSection?.appendChild(movieContainer);
  });
};
