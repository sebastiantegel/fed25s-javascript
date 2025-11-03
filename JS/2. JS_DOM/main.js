// Hitta ett element
const theDiv = document.getElementById("app");

console.log(theDiv);

// Ändra saker
theDiv.className = "red"; // <div id="app" class="red"></div>
theDiv.id = "somethingElse"; // <div id="somethingElse" class="red"></div>
theDiv.innerHTML = "Lorem <i>ipsum</i>";

// Input
const theSuperSecretPasswordTag = document.getElementById(
  "superSecretPassword"
);
console.log(theSuperSecretPasswordTag);

theSuperSecretPasswordTag.value = "qwerty12345";
