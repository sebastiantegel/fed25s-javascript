import type { PokemonProperty } from "./Type";

export type PokemonSearchResult = {
  count: number;
  next: string;
  previous: string;
  results: PokemonProperty[];
};
