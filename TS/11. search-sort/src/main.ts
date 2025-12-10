import { binarySearch } from "./search/binarySearch";
import { linearSearch } from "./search/linearSearch";
import { bubbleSort } from "./sorts/bubbleSort";
import { quickSort } from "./sorts/quickSort";
import "./style.css";

const response = await fetch("/random_numbers.json");
const data: number[] = await response.json();

const response2 = await fetch("/sorted_numbers.json");
const sortedData: number[] = await response2.json();

document.getElementById("searches")?.addEventListener("click", () => {
  // Linjär sökning
  const timeElapsedLin = linearSearch(data);
  console.log("Linear search (avg):", timeElapsedLin.toFixed(3), "ms");

  const timeBinary = binarySearch(sortedData);
  console.log("Binary search (avg):", timeBinary.toFixed(5), "ms");

  //const foundElement = data.find((n) => n === randomNumber);
});

document.getElementById("sorts")?.addEventListener("click", () => {
  const time = bubbleSort(data.slice(0, 100000));
  console.log("Sorted with bubblesort: ", time.toFixed(3), "ms");

  const start = performance.now();
  const sorted = quickSort([...data].slice(0, 100000));
  const end = performance.now();

  console.log(sorted.slice(0, 100));
  console.log("Quicksorted:", (end - start).toFixed(3), "ms");

  // data.sort((a, b) => {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //   return 0;
  // });
});
