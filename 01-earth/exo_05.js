import {
  getArguments,
  isAvailableArgs,
  isPositivInt,
  exit,
  isInt,
} from '../utils/index.js';

const oddOrEven = (value) => {
  if (value % 2 === 0) return 'Even';

  return 'Odd';
};

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('Whazza ??');

  const value = isInt(args[0]);
  if (!value || !isPositivInt(value)) exit('Whazza ??');

  return value;
};

const main = () => {
  const value = getValidArgs();
  return oddOrEven(value);
};

console.log(main());
