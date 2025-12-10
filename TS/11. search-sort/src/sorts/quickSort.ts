export const quickSort = (
  data: number[],
  left = 0,
  right = data.length - 1
) => {
  if (left < right) {
    const pivotIndex = partition(data, left, right);
    quickSort(data, left, pivotIndex - 1);
    quickSort(data, pivotIndex + 1, right);
  }

  return data;
};

const partition = (data: number[], left: number, right: number) => {
  let i = left - 1;
  const pivot = data[right];

  for (let j = left; j < right; j++) {
    if (data[j] < pivot) {
      i++;
      [data[i], data[j]] = [data[j], data[i]];
    }
  }
  [data[i + 1], data[right]] = [data[right], data[i + 1]];

  return i;
};
