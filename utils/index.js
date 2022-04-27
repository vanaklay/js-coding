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

export const isAvailableArgs = (args, nbArg) => {
  if (args.length === nbArg) return true;
  return false;
};

export const isInt = (value) => {
  if (Number.isNaN(parseInt(value))) return false;
  return parseInt(value);
};

export const isPositivInt = (value) => {
  if (value > 0) return true;
  return false;
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
