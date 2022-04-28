import {
  getValidValue,
  getIntegers,
  exit,
  getValueSplitted,
} from '../utils/index.js';

const getHourAndMinutes = (value) => {
  const valueSplitted = getValueSplitted(value, ':', 'error');

  if (valueSplitted.length > 2) exit('error');

  const [hour, minutes] = getIntegers(valueSplitted, 'error');

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
