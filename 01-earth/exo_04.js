import { getArguments, range } from '../utils/index.js';

const getValidParam = () => {
  const args = getArguments();
  const param = args[0];
  if (
    !param ||
    param.length > 1 ||
    typeof param !== 'string' ||
    !Number.isNaN(parseInt(param))
  ) {
    console.log('Error');
    process.exit();
  }
  return param;
};

const getCharCode = (value) => {
  const num = parseInt(value.charCodeAt(0));
  if (Number.isNaN(num)) process.exit();
  return num;
};

const getAlphabetFrom = (value) => {
  const intValue = getCharCode(value);
  const alphabetCode = range(intValue, 123);
  return alphabetCode.map((char) => String.fromCharCode(char)).join('');
};

const main = () => {
  const letter = getValidParam();
  return getAlphabetFrom(letter);
};

console.log(main());
