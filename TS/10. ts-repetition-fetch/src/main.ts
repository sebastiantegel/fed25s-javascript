import type { Pokemon } from "./models/pokemon/Pokemon";
import { getMovies } from "./services/movieService";
import { getPokemon, getPokemons } from "./services/pokemonService";
import "./style.css";

document
  .getElementById("movieSearchForm")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const theInput = document.getElementById("movieSearchText");

    if (!theInput) return;

    const searchText = (theInput as HTMLInputElement).value;

    const movies = await getMovies(searchText);
    console.log(movies);

    // createHtml(movies)
    (theInput as HTMLInputElement).value = "";
  });

document
  .getElementById("pokemonSearchForm")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const theInput = document.getElementById("pokemonSearchText");

    if (!theInput) return;

    const searchText = (theInput as HTMLInputElement).value;

    const pokemon = await getPokemon(searchText);
    console.log(pokemon);

    // createHtml(movies)
    (theInput as HTMLInputElement).value = "";
  });

const pokemons = await getPokemons();
console.log(pokemons);

const pokemonDetailsCall: Promise<Response>[] = [];
pokemons.forEach((pokemon) => {
  pokemonDetailsCall.push(fetch(pokemon.url));
});

Promise.all(pokemonDetailsCall).then((responses) => {
  responses.forEach(async (response) => {
    const pokemon: Pokemon = await response.json();
    console.log(pokemon);
  });
});
