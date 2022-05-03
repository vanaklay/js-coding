import { getArguments, isNArgs, exit } from '../utils/index.js';

const getValidSentence = () => {
  const args = getArguments();
  if (!isNArgs(args, 1)) exit('error');
  return args[0];
};

const main = () => {
  const sentence = getValidSentence();

  // Cast to number
  const pattern = /[a-zA-Z]/;
  const hasString = sentence.search(pattern) === -1 ? 'true' : 'false';
  console.log(hasString);
};

main();
