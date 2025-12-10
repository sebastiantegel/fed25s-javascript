export const bubbleSort = (data: number[]) => {
  // Create a copy of the data received
  const sortedList = [...data];

  let sorted = false;
  let counter = 0;

  const start = performance.now();
  while (!sorted) {
    sorted = true;

    for (let i = 0; i < sortedList.length - 1; i++) {
      if (sortedList[i] > sortedList[i + 1]) {
        sorted = false;
        // Swap values on positions i and i + 1
        [sortedList[i], sortedList[i + 1]] = [sortedList[i + 1], sortedList[i]];
      }
    }

    counter++;

    if (counter % 1000) {
      console.log(".");
    }
  }
  const end = performance.now();

  console.log(sortedList.slice(0, 100));
  return end - start;
};
