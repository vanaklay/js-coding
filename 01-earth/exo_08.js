import { getArguments, isAvailableArgs, exit } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('error');

  return args[0];
};

const main = () => {
  const string = getValidArgs();
  const length = string.length;
  return length;
};

console.log(main());
