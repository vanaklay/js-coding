import {
  exit,
  getArguments,
  isAvailableArgs,
  getIntegers,
} from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 2)) exit('error');

  const integers = getIntegers(args, 'error');
  const a = integers[0];
  if (a < 0) exit('error');

  const b = integers[1];

  return { a, b };
};

const power = (a, b) => a ** b;

const { a, b } = getValidArgs();

console.log(power(a, b));
