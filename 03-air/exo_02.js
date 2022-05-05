import { getArguments, isNArgs, exit } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isNArgs(args, 2)) exit('error');

  const stringToSplit = args[0];
  const separator = args[1];

  return [stringToSplit, separator];
};

const mySplit = (string, separator) => {
  const result = [];
  let x = 0;
  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
      result.push(string.slice(x, string.length));
    }

    if (separators.includes(string[i])) {
      result.push(string.slice(x, i));
      x = i + 1;
      continue;
    }
  }
  return result;
};

const getStringSplitted = (string, separator) => {
  if (!string.includes(separator)) return string;

  const start = string.slice(0, string.indexOf(separator));
  const end = string.slice(string.indexOf(separator));
  return [start, end];
};

const main = () => {
  const [stringToSplit, separator] = getValidArgs();
  console.log(getStringSplitted(stringToSplit, separator).join('\n'));
};

main();
