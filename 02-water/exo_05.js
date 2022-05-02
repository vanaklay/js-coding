import { getOneValue, isPrime, exit } from '../utils/index.js';

const getNextPrime = (value) => {
  let nextPrime = value + 1;

  while (true) {
    if (isPrime(nextPrime)) break;
    nextPrime += 1;
  }
  return nextPrime;
};

const main = () => {
  const value = getOneValue();
  if (isPrime(value)) exit(-1);
  console.log(getNextPrime(value));
};

main();
