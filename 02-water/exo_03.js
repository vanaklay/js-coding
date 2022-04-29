import { exit, getArguments, hasMinimumArg } from '../utils/index.js';

const getValidValue = () => {
  const args = getArguments();
  if (!hasMinimumArg(args, 1)) exit('error');
  return args;
};

const main = () => {
  const values = getValidValue();
  for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
  }
};

main();
