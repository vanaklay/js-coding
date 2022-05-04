import { getArguments, getNumbers } from '../utils/index.js';

const getValidList = () => {
  const args = getArguments();
  return getNumbers(args);
};

const getMinimumDistance = (numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let difference = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (i === sortedNumbers.length - 1) break;
    if (sortedNumbers[i + 1] - sortedNumbers[i] < difference) {
      difference = sortedNumbers[i + 1] - sortedNumbers[i];
    }
  }
  return difference;
};

const main = () => {
  const numbers = getValidList();
  return getMinimumDistance(numbers);
};

console.log(main());
