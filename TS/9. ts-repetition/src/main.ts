import { getData } from "./services/dataService";
import "./style.css";
import { createHtml } from "./utils/html";

// Att skapa en applikation

// 1. Skapa en grundläggande HTML-struktur
// Alltså, skriv html i index.html (statisk html,
// t.ex. sökformulär, knappar som skall finnas från början, header, footer ...)

// 2. Hitta ett (eller flera) element och lyssna efter händelser.

// document.getElementById("htmlId"); -> HTMLElement | null
document.getElementById("htmlId")?.addEventListener("click", () => {
  // Hit kommer vi när användaren klickar på elementet med id: htmlId

  // Vad vill vi göra när vi kommer hit? Hämta data? Skapa html?
  // a) Om vi vill hämta data
  //    Hur skall vi hämta data?
  const theData: any[] = getData();

  // Skapa html baserat på vår data
  // b)
  createHtml(theData);
});
