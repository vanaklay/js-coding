import { getArguments, hasMinimumArg, exit } from '../utils/index.js';

export const getValidValues = () => {
  const args = getArguments();
  if (!hasMinimumArg(args, 2)) exit('error');

  return args;
};

const sortByAscii = (tab) => {
  const newTab = [...tab];
  for (let i = newTab.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      // sort by first char
      if (newTab[j + 1].charCodeAt(0) < newTab[j].charCodeAt(0)) {
        const temp = newTab[j + 1];
        newTab[j + 1] = newTab[j];
        newTab[j] = temp;
      }
    }
  }
  return newTab.join(' ');
};

const main = () => {
  const tab = getValidValues();
  return sortByAscii(tab);
};

console.log(main());
