import "./style.css";

const me = {
  name: "Sebastian",
  age: 46,
  isMarried: true,
};

console.log(me);

console.log(me.name);

me.age = 47;

console.log(me);

const createHtmlForPerson = (objectToHtmlify) => {
  const person = document.getElementById("person");

  const name = document.createElement("h2");
  const age = document.createElement("p");
  const isMarried = document.createElement("input");

  name.innerHTML = objectToHtmlify.name;
  age.innerHTML = objectToHtmlify.age;
  isMarried.type = "checkbox";
  isMarried.checked = objectToHtmlify.isMarried;

  person.appendChild(name);
  person.appendChild(age);
  person.appendChild(isMarried);
};

createHtmlForPerson(me);

const family = [
  { name: "Sebastian", age: 46, isMarried: true },
  { name: "Hanna", age: 45, isMarried: true },
  { name: "Astrid", age: 15, isMarried: false },
  { name: "Alvar", age: 15, isMarried: false },
];

family.forEach((person) => {
  createHtmlForPerson(person);
});
