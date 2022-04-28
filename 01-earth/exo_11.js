import { getArguments, isAvailableArgs, isInt, exit } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('error');

  const value = isInt(args[0]);
  if (value < 0 || !value) exit('error');

  return value;
};

const isPrime = (value) => {
  if (value > 1) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return `No, ${value} is not a Prime number`;
      }
    }
    return `Yes, ${value} is a Prime number`;
  }
  return `No, ${value} is not a Prime number`;
};

const main = () => {
  const value = getValidArgs();
  return isPrime(value);
};

console.log(main());
