import { getArguments, isNArgs, exit, range } from '../utils/index.js';

const getValidNumbers = () => {
  const args = getArguments();
  if (!isNArgs(args, 2)) exit('error');

  const [a, b] = [args[0], args[1]].map(Number);

  if (isNaN(a) || isNaN(b)) exit('error');

  return [a, b];
};

const main = () => {
  let [a, b] = getValidNumbers();

  // ordered ?
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  return range(a, b).join(' ');
};

console.log(main());
