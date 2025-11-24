import type { Pokemon } from "./models/Pokemon";
import "./style.css";
import { createHtml } from "./utils/html";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText");
  if (!theInput) return;

  const searchText = (theInput as HTMLInputElement).value;

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + searchText
  );
  const data: Pokemon = await response.json();

  console.log(data);

  createHtml(data);
});
