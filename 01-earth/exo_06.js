import { getArguments, isAvailableArgs, isInt, exit } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 2)) exit('error');

  const a = isInt(args[0]);
  const b = isInt(args[1]);

  if (!a || !b || a === 0 || b > a) exit('error');
  return { a, b };
};

const divide = (a, b) => {
  const result = Math.floor(a / b);
  const remainder = a - b * result;
  return { result, remainder };
};

const main = () => {
  const { a, b } = getValidArgs();
  const { result, remainder } = divide(a, b);
  console.log(`result: ${result}\nremainder: ${remainder}`);
};

main();
