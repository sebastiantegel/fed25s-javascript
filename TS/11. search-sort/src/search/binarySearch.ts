export const binarySearch = (data: number[]) => {
  const times: number[] = [];

  for (let i = 0; i < 1000; i++) {
    const randomNumber = Math.floor(Math.random() * 10000000) + 1;

    // Define pointers for search
    let left = 0;
    let right = data.length - 1;

    const start = performance.now();
    while (right - left > 1) {
      // Calculate the middle of the right and left pointer
      // Place middle in the middle of the remaining positions
      const middle = left + Math.floor((right - left) / 2);

      // If we found the value = we win!
      if (data[middle] === randomNumber) break;

      // Else move one pointer
      if (randomNumber < data[middle]) right = middle;
      else left = middle;
    }
    const end = performance.now();

    times.push(end - start);
  }

  return times.reduce((sum, time) => (sum += time)) / 1000;
};
