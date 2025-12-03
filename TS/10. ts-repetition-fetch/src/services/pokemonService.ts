// Create CRUD operations for pokemons

import type { Pokemon } from "../models/pokemon/Pokemon";
import type { PokemonSearchResult } from "../models/pokemon/PokemonSearchResult";
import { get } from "./serviceBase";

export const getPokemon = async (name: string) => {
  const pokemon = await get<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/" + name,
  );
  return pokemon;
};

export const getPokemons = async () => {
  const pokemons = await get<PokemonSearchResult>(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
  );
  return pokemons.results;
};
