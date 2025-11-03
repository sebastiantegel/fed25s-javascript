import "./style.css";

const handleClick = (clickedNumber) => {
  console.log("Du klickade på:", clickedNumber);
};

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const numbers = [1, 1, 2, 3, 5, 8, 13, 21];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

const numbersContainer = document.getElementById("numbers");

// for (let i = 0; i < numbers.length; i++) {
//   const div = document.createElement("div"); // <div></div>

//   div.className = "number"; // <div class="number"></div>
//   div.innerHTML = numbers[i]; // <div class="number">1</div>

//   numbersContainer.appendChild(div);
// }

// ------------------- forEach -----------------------
// numbers.forEach((n) => {
//   console.log(n);
// });

numbers.forEach((n) => {
  // if (n % 2 == 0) {
  const div = document.createElement("div"); // <div></div>

  div.className = "number"; // <div class="number"></div>
  div.innerHTML = n; // <div class="number">1</div>
  div.addEventListener("click", () => {
    handleClick(n);
    div.classList.toggle("marked");
  });

  numbersContainer.appendChild(div);
  // }
});

// ------------------- map ----------------------------
const doubles = numbers.map((n) => {
  if (n % 2 == 0) {
    return n * 2;
  } else {
    return n;
  }
});

console.log(doubles);
