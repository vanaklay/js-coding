import {
  getValidValue,
  getIntegers,
  exit,
  getValueSplitted,
} from '../utils/index.js';

const getHourAndMinutes12 = (value) => {
  const valueSpitted = getValueSplitted(value, ':', 'error');

  if (valueSpitted.length > 2) exit('error');

  const ref = valueSpitted[1].slice(2);
  const integers = getIntegers(
    [valueSpitted[0], valueSpitted[1].slice(0, 2)],
    'error'
  );
  const hour = integers[0];
  const minutes = integers[1];
  if (
    (typeof hour !== 'number' && typeof minutes !== 'number') ||
    (hour === 12 && ref === 'AM') ||
    hour > 12 ||
    minutes > 59
  )
    exit('error');

  return { hour, minutes, ref };
};

const changeTimelin = (hour, minutes, ref) => {
  if (ref === 'PM' && hour > 0)
    return `${hour === 12 ? hour : hour + 12}:${minutes}`;
  if (ref === 'AM' && hour >= 0)
    return `${hour === 0 ? '00' : hour < 10 ? `0${hour}` : hour}:${minutes}`;
  return exit('error');
};

const main = () => {
  const value = getValidValue();
  const { hour, minutes, ref } = getHourAndMinutes12(value);
  console.log(changeTimelin(hour, minutes, ref));
};

main();
