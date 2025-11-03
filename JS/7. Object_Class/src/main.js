import "./style.css";

class Person {
  name;
  age;
  isMarried;

  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

const me = new Person("Sebastian", 46, true);
// me.name = "Sebastian";
// me.age = 46;
// me.isMarried = true;

const wife = new Person("Hanna", 45, true);
// wife.name = "Hanna";
// wife.age = 45;
// wife.isMarried = true;

const daugther = new Person("Astrid", 15, false);
// daugther.name = "Astrid";
// daugther.age = 15;
// daugther.isMarried = false;

const son = new Person("Alvar", 15, false);
// son.name = "Alvar";
// son.age = 15;
// son.isMarried = false;

const family = [me, wife, daugther, son];

console.log(family);

const app = document.getElementById("app");

family.forEach((person) => {
  console.log(person);

  // Skapa
  const div = document.createElement("div");
  const name = document.createElement("h2");
  const age = document.createElement("p");
  const isMarried = document.createElement("input");

  // Ändra
  div.className = "person";
  name.innerHTML = person.name;
  age.innerHTML = person.age;
  isMarried.type = "checkbox";
  isMarried.checked = person.isMarried;
  isMarried.disabled = true;

  // Placera
  div.appendChild(name);
  div.appendChild(age);
  div.appendChild(isMarried);
  app.appendChild(div);
});
