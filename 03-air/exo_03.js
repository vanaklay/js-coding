import { getArguments, hasMinimumArg, exit } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!hasMinimumArg(args, 3)) exit('error');

  const separator = args[args.length - 1];
  const words = args.slice(0, args.length - 1);

  return [words, separator];
};

const concatenateWords = (words, separator) => {
  return words.join(separator);
};

const main = () => {
  const [words, separator] = getValidArgs();
  console.log(concatenateWords(words, separator));
};

main();
