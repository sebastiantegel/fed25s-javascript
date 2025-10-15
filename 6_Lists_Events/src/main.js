import "./style.css";

const numbers = [1, 1, 2, 3, 5, 8, 13, 21];

const createHtml = () => {
  const numbersContainer = document.getElementById("numbers");
  numbersContainer.innerHTML = "";

  numbers.forEach((n, i) => {
    const div = document.createElement("div"); // <div></div>

    div.className = "number"; // <div class="number"></div>
    div.innerHTML = n; // <div class="number">1</div>
    div.addEventListener("click", () => {
      numbers.splice(i, 1); // Förändra listan
      console.log(numbers); // Skriv ut listan i console.log
      createHtml();
    });

    numbersContainer.appendChild(div);
  });
};

createHtml();
