import { getArguments } from '../utils/index.js';

const displayArguments = () => {
  const args = getArguments();
  return args.join('\n');
};

console.log(displayArguments());
