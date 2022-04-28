import { exit, getArguments, getIntegers } from '../utils/index.js';

const getValidNumbers = () => {
  const args = getArguments();
  if (args.length < 2) exit('Whazza ???');

  return getIntegers(args, 'error');
};

const isSorted = (numbers) => {
  let numbersSorted = true;

  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      numbersSorted = true;
      break;
    }
    if (numbers[i] > numbers[i + 1] || numbers[i] === numbers[i + 1]) {
      numbersSorted = false;
      break;
    }
  }

  return numbersSorted ? 'Sorted' : 'Not Sorted';
};

const main = () => {
  const numbers = getValidNumbers();
  console.log(isSorted(numbers));
};

main();
