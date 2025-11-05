import type { IPerson } from "./models/IPerson";
import { Person } from "./models/Person";
import type { PersonType } from "./models/PersonType";
import "./style.css";

// Skapa en funktion och säg att den inte skall returnerna något.
const handleClick = (): void => {};

// Skapa en lista med tal och datatypen :number
const numbers: number[] = [1, 1, 2, 3, 5, 8];

//  Skapa en lista med texter och datatypen :string[]
const texts: string[] = ["Lorem", "ipsum"];

// Loopar fungerar som vanligt, MEN vad är datatypen på
// parametern t?
texts.forEach((t: string) => {});

// En vanlig for-loop...
for (let i = 0; i < numbers.length; i++) {
  // Och vilken datatyp har numbers[i]?
  console.log(numbers[i]);
}

// Skapa ett objekt av type Person (class)
const p: Person = new Person("Sebastian", 46, true);

// Skapa ett objekt av type IPerson (interface)
const p2: IPerson = { name: "Hanna", age: 45, isMarried: true };

// Skapa ett objekt av type PersonType (type)
const p3: PersonType = { name: "Astrid", age: 15, isMarried: false };

// Skapa en lista som får innehålla objekt som ser ut som
// Person (class).
// Eftersom alla objekt vi har skapat ser ut på samma sätt
// kan vi lägga in dem i listan
const family: Person[] = [p, p2, p3];

// Vilken datatyp har parameter person?
family.forEach((person) => {
  // Create html...
});

// När vi hittar element får de datatypen HTMLElement | null
const div = document.getElementById("app");

// Kontrollera att vi hittade elementen
if (div) {
  // Innan vi ändrar någonting i elementet
  div.innerHTML = "Lorem";
  div.addEventListener("click", handleClick);
}

// const btn = document.getElementById("save");

// if(btn) {
//     btn.addEventListener("click", () => {});
// }
document.getElementById("save")?.addEventListener("click", () => {});

// När vi skapar element får vi datatypen som hänger ihop
// med elementet vi skapar, i detta fall HTMLDivElement
const div2 = document.createElement("div");

// Inputs behöver vi hantera explicit
const theInput = document.getElementById("searchText");
if (theInput) {
  // Omvandla vår theInput till en HTMLInputElement
  const theText = (theInput as HTMLInputElement).value;
}
