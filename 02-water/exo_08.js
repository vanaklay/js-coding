import { getValidString } from '../utils/index.js';

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const getSentence = (string, separator) =>
  string
    .split(separator)
    .map((word) => capitalize(word))
    .join(separator);

const main = () => {
  const string = getValidString();
  // Separate by \n
  const sentence = getSentence(string, '\n');
  // Separate by space
  const formatedSentence = getSentence(sentence, ' ');
  // Separate by tab
  const finalSentence = getSentence(formatedSentence, '   ');
  console.log(finalSentence);
};

main();
