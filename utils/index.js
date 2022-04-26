export const getArguments = () => process.argv.slice(2);

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
