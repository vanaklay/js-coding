import { getArguments, isNArgs, exit } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isNArgs(args, 1)) exit('error');

  return args[0];
};

const mySplit = (string) => {
  const separators = [' ', '\n', '    '];
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

const main = () => {
  const sentence = getValidArgs();
  return mySplit(sentence).join('\n');
};

console.log(main());
