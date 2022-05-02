import { getValidValue } from '../utils/index.js';

const fibonacciByIteration = (value) => {
  let n1 = 0; // start
  let n2 = 1;

  const fibonacci = [n1, n2];

  for (let i = 2; i < value + 1; i++) {
    const next = n1 + n2;
    fibonacci.push(next);
    n1 = n2;
    n2 = next;
  }

  return fibonacci[fibonacci?.length - 1];
};

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const main = () => {
  const value = getValidValue();
  console.log(fibonacci(value));
};

main();
