import { getValidList } from '../utils/index.js';

// See which is the smallest, take it out and put it at the beginning, and so on
// Big O: O(n^2) because we have loop in loop

const selectSort = (numbers) => {
  const newNumbers = [...numbers];
  for (let i = 0; i < newNumbers.length - 1; i++) {
    let min = newNumbers[i]; // by default, the first element is the min
    let minIndex = i; // default index
    for (let j = i + 1; j < newNumbers.length; j++) {
      if (newNumbers[j] < min) {
        min = newNumbers[j];
        minIndex = j;
      }
    }
    // permutation
    newNumbers[minIndex] = newNumbers[i];
    newNumbers[i] = min;
  }
  return newNumbers;
};

const main = () => {
  const numbers = getValidList();
  return selectSort(numbers).join(' ');
};

console.log(main());
