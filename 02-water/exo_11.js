import { getArguments, hasMinimumArg, exit } from '../utils/index.js';

const getValidValues = () => {
  const args = getArguments();
  if (!hasMinimumArg(args, 2)) exit('error');

  return args;
};

// instead of using indexOf built-in js method

const getIndexOf = (args) => {
  const elementToFind = args[args.length - 1];
  const bucket = args.slice(0, args.length - 1);
  return bucket.findIndex((element) => element === elementToFind);
};

const main = () => {
  const values = getValidValues();
  return getIndexOf(values);
};

console.log(main());
