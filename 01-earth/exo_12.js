import {
  getArguments,
  isAvailableArgs,
  getIntegers,
  exit,
  getValueSplitted,
} from '../utils/index.js';

const getValidValue = () => {
  const args = getArguments();
  if (!isAvailableArgs(args, 1)) exit('error');

  return args[0];
};

const getHourAndMinutes = (value) => {
  const valueSplitted = getValueSplitted(value, ':', 'error');

  if (valueSplitted.length > 2) exit('error');

  const integers = getIntegers(valueSplitted, 'error');
  const hour = integers[0];
  const minutes = integers[1];

  if (
    (typeof hour !== 'number' && typeof minutes !== 'number') ||
    hour > 23 ||
    minutes > 59
  )
    exit('error');

  return { hour, minutes };
};

const changeTimeline = (hour, minutes) => {
  if (hour >= 12 && hour < 24) {
    const renderHour = hour - 12 === 0 ? '12' : hour - 12;
    return `${renderHour}:${minutes}PM`;
  }
  if (hour >= 0 && hour < 12) {
    const renderHour = hour === 0 ? '00' : hour < 10 ? `0${hour}` : hour;
    return `${renderHour}:${minutes}AM`;
  }
};

const main = () => {
  const value = getValidValue();
  const { hour, minutes } = getHourAndMinutes(value);
  console.log(changeTimeline(hour, minutes));
};

main();
