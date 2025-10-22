import { Car } from "./models/Car";
import "./style.css";
import { createHtml } from "./utils";

const myCar = new Car("Blue", "Volvo", "V90");

localStorage.setItem("person", "Sebastian");

localStorage.setItem("car", JSON.stringify(myCar));

const valueFromLocalStorage = localStorage.getItem("person");
console.log(valueFromLocalStorage);

// carFromLs är av typen string, alltid ifrån localStorage!
const carFromLs = localStorage.getItem("car");

// Gör om datatypen string till datatypen object
const car = JSON.parse(carFromLs);

// Använd objektets egenskaper för att skapa html
// document.getElementById("app").innerHTML = car.brand;

// Skapa en lista med bilar som vi börjar med
const carsOG = [
  new Car("Red", "Nissan", "Micra"),
  new Car("Silver", "Saab", "95"),
  new Car("Brown", "Volvo", "V90"),
];

let cars = [];

const carsFromLs = localStorage.getItem("cars");
if (carsFromLs === null) {
  cars = carsOG;
} else {
  cars = JSON.parse(carsFromLs);
}

// När submit sker, skör följande funktion
const handleSubmit = (e) => {
  // Avbryt standardfunktionen från submit (förhindrar POST)
  e.preventDefault();

  // Hämta texterna från alla textrutor
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const color = document.getElementById("color").value;

  // Skapa ett nytt objekt med texterna från textrutorna
  const theNewCar = new Car(color, brand, model);

  // Lägg till objektet i listan
  cars.push(theNewCar);

  localStorage.setItem("cars", JSON.stringify(cars));

  // Skapa html för den nya listan
  createHtml(cars);
};

// Hitta formuläret
const carForm = document.getElementById("carForm");

// Om formuläret finns...
if (carForm) {
  /// ... lyssna efter händelsen submit
  carForm.addEventListener("submit", handleSubmit);
}

// Börja med att skapa html för listan med tre bilar
createHtml(cars);
