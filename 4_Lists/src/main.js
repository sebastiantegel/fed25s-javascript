import "./style.scss";

const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(numbers);

numbers[5] = 10;
console.log(numbers);

numbers.push(23);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.splice(5, 1);
console.log(numbers);

const texts = ["Lorem", "ipsum", "dolor", "sit", "amet"];
texts[1] = "asdf";
texts.push("qwerty");
texts.pop();
texts.splice(1, 1);

const ul = document.getElementById("theNumbers");

// Kör koden inuti funktionen lika många gånger som
// det finns värden i listan.
numbers.forEach((n) => {
  const li1 = document.createElement("li"); // <li></li>
  li1.innerHTML = n; // <li>1</li>

  // Lägg till <li> inuti <ul>
  ul.appendChild(li1);
});
