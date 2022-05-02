import { getValidString } from '../utils/index.js';

// not implement if numeric inside string

const main = () => {
  const words = getValidString();

  const upperLetters = [];

  let flag = false;

  for (let i = 0; i < words.length; i++) {
    if (words[i].search(/[^a-zA-Z]/) !== -1) {
      flag = !flag;
      upperLetters.push(words[i]);
      continue;
    }
    if (flag && i % 2 !== 0) {
      upperLetters.push(words[i].toUpperCase());
      continue;
    }
    if (!flag && i % 2 === 0) {
      upperLetters.push(words[i].toUpperCase());
      continue;
    }
    upperLetters.push(words[i]);
  }

  console.log(upperLetters.join(''));
};

main();
