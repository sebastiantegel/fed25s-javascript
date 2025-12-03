import type { PokemonType } from "./PokemonType";
import type { Sprites } from "./Sprites";

export type Pokemon = {
  id: number;
  name: string;

  sprites: Sprites;
  types: PokemonType[];
};
