import { createHtml } from "./htmlUtils";
import type { OmdbResponse } from "./models/OmdbResponse";
import "./style.css";

//#region Promise
// const x = 100;

// const p = new Promise((resolve: (value: boolean) => void, reject) => {
//   setTimeout(() => {
//     if (x >= 10) {
//       resolve(true);
//     } else {
//       reject();
//     }
//   }, 4000);
// });

// p.then(
//   (ok) => {
//     console.log("Det fungerar:", ok);
//   },
//   () => {
//     console.error("Det blev ett fel");
//   }
// );
//#endregion

// const f = fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
// f.then(() => {});

fetch("https://omdbapi.com/?apikey=416ed51a&s=star")
  .then((response) => response.json())
  .then((data: OmdbResponse) => {
    createHtml(data.Search);
  });
