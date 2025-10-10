const handleClick = () => {
  console.log("Du klickade på knappen");

  const textFromUser = document.getElementById("userInput").value;

  const myDiv = document.createElement("div"); // <div></div>
  myDiv.className = "awesomeness"; // <div class="awesomeness"></div>
  myDiv.id = "myDiv"; // <div class="awesomeness" id="myDiv"></div>
  myDiv.innerHTML = textFromUser; // <div class="awesomeness" id="myDiv">Lorem ipsum</div>

  //   myDiv.addEventListener("click", () => {
  //     alert("Du klickade på den nyss skapade div:en");
  //   });

  document.body.appendChild(myDiv);
};
// function handleClick() {}

const handleHover = () => {
  saveButton.className = "awesome";
};

const handleLeave = () => {
  saveButton.className = "";
};

const saveButton = document.getElementById("save");

// Kontrollera att saveButton faktiskt är en <button></button>
if (saveButton !== null) {
  // saveButton.innerHTML = "Avbryt";

  saveButton.addEventListener("click", handleClick);
  saveButton.addEventListener("mouseenter", handleHover);
  saveButton.addEventListener("mouseleave", handleLeave);
}
