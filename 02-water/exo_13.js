import { getValidList } from '../utils/index.js';

// Compare 1 to 1 and swap if the one on the right is smaller
// if there has been at least one permutation, the sorting starts again until there are no more permutations
// Big O: O(n^2) because we use loop inside loop

// Mutated list
const bubbleSort = (numbers) => {
  let hasPermuted = true;
  while (hasPermuted) {
    hasPermuted = false;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        hasPermuted = true;
        const temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
      }
    }
  }

  return numbers;
};

// Immutable list
const getBubbleSort = (numbers) => {
  const newNumbers = [...numbers];
  let hasPermuted = true;
  while (hasPermuted) {
    hasPermuted = false;
    for (let i = 0; i < newNumbers.length - 1; i++) {
      if (newNumbers[i] > newNumbers[i + 1]) {
        hasPermuted = true;
        const temp = newNumbers[i];
        newNumbers[i] = newNumbers[i + 1];
        newNumbers[i + 1] = temp;
      }
    }
  }

  return newNumbers;
};

const main = () => {
  const numbers = getValidList();
  return getBubbleSort(numbers).join(' ');
};

console.log(main());
