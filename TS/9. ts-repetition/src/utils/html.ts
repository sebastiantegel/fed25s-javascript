import { objectToHtml } from "./objectToHtml";

export const createHtml = (data: any[]) => {
  // Alternativen för loopen är:
  for (let i = 0; i < data.length; i++) {}

  // Eller för "vanlig" loop:
  data.forEach((value) => {
    // Skapa html-strukturen för varje enskilt värde i listan

    const container = objectToHtml(value);

    // Placera alla taggar rätt:
    document.body.appendChild(container);
  });
};
