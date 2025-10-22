// Funktion för att skapa html-strukturen för en lista
// med bil-objekt (cars)
export const createHtml = (cars) => {
  // Hitta den <section> som har id:t cars.
  const sectionElement = document.getElementById("cars");

  // Töm <section> på innehåll (den gamla listan)
  sectionElement.innerHTML = "";

  // Loopa igenom den nya listan
  cars.forEach((car) => {
    // Skapa element
    const container = document.createElement("div");
    const brand = document.createElement("h3");
    const model = document.createElement("p");
    const color = document.createElement("div");

    // Fyll på med information i elementen
    container.className = "car";
    brand.innerHTML = car.brand;
    model.innerHTML = car.model;
    color.className = "colorBox";
    color.style.backgroundColor = car.color;

    // Lägg till elementen
    container.appendChild(brand);
    container.appendChild(model);
    container.appendChild(color);
    sectionElement.appendChild(container);
  });
};
