import "./style.css";

// Gissa talet ---------------------
const startGame = () => {
  const numberToGuess = +prompt("Mata in ett tal mellan 1 och 100");

  let theGuess = +prompt("Gissa på ett tal:");

  let numberOfGuesses = 1;

  while (theGuess !== numberToGuess) {
    if (theGuess > numberToGuess) {
      alert("Din gissning var för hög, prova igen");
    } else {
      alert("Din gissning var för låg, prova igen");
    }

    theGuess = +prompt("Gissa på ett tal:");
    numberOfGuesses++;
  }

  alert(`Grattis! Du gissade rätt på ${numberOfGuesses} försöket`);
};

const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);
//----------------------------

// Personnummer --------------------------
const startPnr = () => {
  const pnr = prompt("Skriv dina första 11 siffror i ditt personnummer");

  let sum = 0;
  for (let i = 0; i < pnr.length; i++) {
    const temp = +pnr[i];
    if (i % 2 === 0) {
      const product = temp * 2;

      if (product >= 10) {
        sum += 1 + (product % 10);
      } else {
        sum += product;
      }
    } else {
      sum += temp;
    }
  }

  const ctrlNumber = 10 - (sum % 10);
  alert(pnr + ctrlNumber);
};

document.getElementById("pnrStart").addEventListener("click", startPnr);
// ----------------------------------
