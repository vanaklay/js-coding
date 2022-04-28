import {
  getArguments,
  isAvailableArgs,
  isInt,
  exit,
  isPositivInt,
} from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('error');

  const value = isInt(args[0]);
  if (!value || !isPositivInt(value)) exit('error');

  return value;
};

const sqrt = (value) => value ** 0.5;

const main = () => {
  const value = getValidArgs();
  return sqrt(value);
};

console.log(main());
