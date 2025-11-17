import type { Movie } from "./models/Movie";
import type { MovieExt } from "./models/MovieExt";
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
      const body = document.getElementById("modalBody");
      if (body) {
        body.innerHTML = "";
      }
      const movieDetails = await getMovieById(movie.imdbID);
      createHtmlForMovieDetails(movieDetails);
    });
    movieContainer.className = "movie";
    movieContainer.setAttribute("data-bs-toggle", "modal");
    movieContainer.setAttribute("data-bs-target", "#staticBackdrop");

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);
    moviesSection?.appendChild(movieContainer);
  });
};

export const createHtmlForMovieDetails = (movie: MovieExt) => {
  const title = document.getElementById("staticBackdropLabel");
  if (title) {
    title.innerHTML = movie.Title;
  }

  const body = document.getElementById("modalBody");
  if (body) {
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const actors = document.createElement("p");
    const director = document.createElement("p");
    const plot = document.createElement("p");

    img.src = movie.Poster;
    img.alt = movie.Title;
    actors.innerHTML = movie.Actors;
    director.innerHTML = movie.Director;
    plot.innerHTML = movie.Plot;

    imgContainer.appendChild(img);
    body.appendChild(imgContainer);
    body.appendChild(plot);
    body.appendChild(actors);
    body.appendChild(director);
  }
};
