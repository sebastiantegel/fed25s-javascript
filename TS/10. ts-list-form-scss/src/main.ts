import type { Movie } from "./models/Movie";
import type { OmdbResponse } from "./models/OmdbResponse";
import "./scss/style.scss";

const numbers: number[] = [1, 5, 3, 1, 2, 8];
const ascending = true;

let movies: Movie[] = [];

const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
const data: OmdbResponse = await response.json();
movies = data.Search;

// sort
numbers.sort((a, b) => {
  if (ascending) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  } else {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  }
});

console.log(numbers);

console.log([...movies]);

movies.sort((a, b) => {
  if (a.Title.toLowerCase() > b.Title.toLowerCase()) return 1;
  if (a.Title.toLowerCase() < b.Title.toLowerCase()) return -1;
  return 0;
});

console.log(movies);

// filtrera
const filteredNumbers = numbers.filter((n) => n > 2);
console.log(filteredNumbers);

const nonStarWarsMovies = movies.filter(
  (movie) => !movie.Title.startsWith("Star Wars")
);
console.log(nonStarWarsMovies);

// hitta
const foundNumber = numbers.find((n) => n === 5);
console.log(foundNumber);

const foundMovie = movies.find((movie) => movie.Title.startsWith("Star Wars"));
console.log(foundMovie);

// omvandla
const doubles = numbers.map((n) => {
  return n * 2;
});

console.log(doubles);

// ? -> Querystring
// ?firstname=Sebastian&lastname=Tegel

// Querystring innehåller strukturen: variabelnamn=värde separerat med &

document.getElementById("myForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hantera vad som händer vid submit (plocka ut datat från formuläret)
});
