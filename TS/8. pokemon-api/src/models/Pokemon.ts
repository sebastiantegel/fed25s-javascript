import type { Cry } from "./Cry";
import type { Sprite } from "./Sprite";
import type { Type } from "./Type";

export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  cries: Cry;
  sprites: Sprite;
  types: Type[];
};
