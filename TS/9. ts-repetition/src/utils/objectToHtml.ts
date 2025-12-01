export const objectToHtml = (value: any) => {
  const container = document.createElement("div"); // <div></div>
  const title = document.createElement("h2"); //<h2></h2>
  const price = document.createElement("p"); //<p></p>

  // Fyll på med innehåll:
  title.innerHTML = "...";
  title.addEventListener("click", () => {});

  // Placera alla taggar inuti container:
  container.appendChild(title);
  container.appendChild(price);
  // <div>
  //  <h2></h2>
  //  <p></p>
  // </div>

  return container;
};
