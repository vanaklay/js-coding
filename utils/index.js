export const exit = (message) => {
  console.log(message);
  process.exit();
};

export const getArguments = () => process.argv.slice(2);

export const getIntegers = (args, errorMessage) => {
  const numbers = args.map((num) => isInt(num));
  const verifiedNumbers = numbers.filter((num) => typeof num === 'number');

  if (numbers.length === verifiedNumbers.length) return verifiedNumbers;
  return exit(errorMessage);
};

export const getNumbers = (args, minimum = 2) => {
  if (!hasMinimumArg(args, minimum)) exit('error');
  return getIntegers(args, 'error');
};

export const getOneValue = () => {
  const args = getArguments();
  if (!isNArgs(args, 1)) return exit('error');

  const value = isInt(args[0]);
  if (!value || !isPositivInt(value)) return exit('error');

  return value;
};

export const getValidValue = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('error');

  return args[0];
};

export const getValidString = () => {
  const args = getArguments();
  if (!isNArgs(args, 1)) exit('error');

  const string = isString(args[0]);
  if (!string) exit('error');
  return string;
};

export const getValueSplitted = (value, selector, errorMessage) => {
  if (!value || !value.includes(selector)) exit('error');
  return value.split(selector);
};

export const hasMinimumArg = (args, nbArg) => {
  if (args.length > nbArg - 1) return true;
  return false;
};

export const isAvailableArgs = (args, nbArg) => {
  if (args.length === nbArg) return true;
  return false;
};

export const isChar = (value) => {
  if (!Number.isNaN(parseInt(value))) return false;
  return value;
};

export const isInt = (value) => {
  const found = value.match(/-\D+/);
  if (found?.length > 0) return false;
  if (Number.isNaN(parseInt(value))) return false;
  return parseInt(value);
};

export const isPositivInt = (value) => {
  if (value > 0) return true;
  return false;
};

export const isPrime = (value) => {
  if (value > 1) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

export const isNArgs = (args, num) => {
  if (args?.length === num) return true;
  return false;
};

export const isString = (value) => {
  if (!isNaN(parseInt(value))) return false;
  return value;
};

/**
 *
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @returns {array}
 */
export const range = (start, stop, step) => {
  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  }

  if (typeof step === 'undefined') step = 1;

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) return [];

  const array = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) array.push(i);
  return array;
};
