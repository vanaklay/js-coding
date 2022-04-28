import {
  exit,
  getArguments,
  getIntegers,
  isAvailableArgs,
} from '../utils/index.js';

const getValidValues = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 3)) exit('error');

  const [x, y, z] = getIntegers(args, 'error');
  if (x === y || x === z) exit('error');
  return [x, y, z];
};

const getValuesSorted = (a, b) => {
  let newA = a;
  let newB = b;
  if (a > b) {
    newA = b;
    newB = a;
  }
  return [newA, newB];
};

const getMiddle = (x, y, z) => {
  let flag = true;
  let newX, newY, newZ;
  while (flag) {
    [newX, newY] = getValuesSorted(x, y);
    [newY, newZ] = getValuesSorted(newY, z);
    if (newX < newY && newY < newZ) {
      flag = false;
    }
  }
  return newY;
};

const main = () => {
  const [x, y, z] = getValidValues();
  console.log(getMiddle(x, y, z));
};

main();
