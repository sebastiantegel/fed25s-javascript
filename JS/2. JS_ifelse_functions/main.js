const x = 11;

if (x > 10) {
  console.log("stort tal");
} else {
  if (x === 10) {
    console.log("x är 10");
  } else {
    console.log("litet tal");
  }
}

const firstName = "Sebastian";
if (firstName === "Sebastian") {
  console.log("Hej " + firstName);
} else {
  console.log("Hej okänd människa");
}

if (firstName > "Hej") {
}

// -------------------------------------
const greeting = () => {
  console.log("Du anropade greeting");
};

// function greeting() {
//   console.log("Du anropade greeting");
// }

// Anrop till funktionen greeting
greeting();

// ---------------------------------------
const message = (text) => {
  if (text === "Sebastian") {
    console.log("Hej " + text);
  } else {
    console.log("Hej annan människa");
  }
};

// Anropa message tre gånger, med olika värden
message("Sebastian");
message("Hanna");
message(); // text -> undefined (inget värde)

// ----------------------------------------
const sum = (x, y) => {
  const s = x + y;
  console.log(s);

  return s;
};

// function sum(x, y) {
//   const s = x + y;
//   console.log(s);

//   return s;
// }

const result = sum(10, 30);
console.log("Result:", result);
