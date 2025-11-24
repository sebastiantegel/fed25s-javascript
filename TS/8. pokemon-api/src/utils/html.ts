import type { Pokemon } from "../models/Pokemon";

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 100) + 1;
};

export const createHtml = (pokemon: Pokemon) => {
  const section = document.getElementById("pokemon");

  if (section) {
    section.innerHTML = "";
  }
  const name = document.createElement("h2");
  name.innerHTML = pokemon.name;

  const id = document.createElement("p");
  id.innerHTML = pokemon.id.toString();

  const types = document.createElement("ul");
  pokemon.types.forEach((type) => {
    const li = document.createElement("li");
    li.innerHTML = type.type.name;
    types.appendChild(li);
  });

  const img = document.createElement("img");
  if (getRandomNumber() > 10) {
    img.src = pokemon.sprites.front_default;
  } else {
    img.src = pokemon.sprites.front_shiny;
  }
  img.alt = pokemon.name;

  const audioContainer = document.createElement("article");
  const audio = document.createElement("audio");
  audio.src = pokemon.cries.latest;
  audio.autoplay = true;
  audio.controls = false;
  audioContainer.appendChild(audio);

  section?.appendChild(name);
  section?.appendChild(id);
  section?.appendChild(types);
  section?.appendChild(img);
  section?.appendChild(audioContainer);
};
