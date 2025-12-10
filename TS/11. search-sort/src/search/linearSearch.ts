export const linearSearch = (data: number[]) => {
  const times: number[] = [];

  for (let j = 0; j < 1000; j++) {
    const randomNumber = Math.floor(Math.random() * 10000000) + 1;

    const start = performance.now();
    for (let i = 0; i < data.length; i++) {
      if (data[i] === randomNumber) break;
    }
    const end = performance.now();

    const timeElapsed = end - start;
    times.push(timeElapsed);
  }

  return times.reduce((sum, time) => (sum += time), 0) / 1000;
};
