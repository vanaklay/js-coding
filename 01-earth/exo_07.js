import { getArguments, isAvailableArgs, exit } from '../utils/index.js';

const getStringSorted = (args) => {
  const newString = [];
  for (let i = args.length - 1; i > -1; i--) {
    newString.push(args[i]);
  }
  return newString;
};

const getValidArgs = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('error');

  return args[0];
};

const main = () => {
  const string = getValidArgs();
  const stringSorted = getStringSorted(string);
  return stringSorted.join('');
};

console.log(main());
