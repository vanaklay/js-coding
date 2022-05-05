import { getValidList } from '../utils/index.js';

const getMinimumDistance = (numbers) => {
  // Avoid mutated
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  return sortedNumbers.reduce((difference, num, i, array) => {
    if (i === array.length) return;
    if (array[i + 1] - num < difference) {
      difference = array[i + 1] - num;
    }
    return difference;
  }, Number.MAX_SAFE_INTEGER);
};

const main = () => {
  const numbers = getValidList();
  return getMinimumDistance(numbers);
};

console.log(main());
