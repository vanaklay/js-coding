import { getArguments, isNArgs, exit, isString } from '../utils/index.js';

const getValidArgs = () => {
  const args = getArguments();
  if (!isNArgs(args, 2)) exit('error');

  const referent = isString(args[0]);
  const element = isString(args[1]);

  if (!referent || !element) exit('error');

  return { referent, element };
};

const main = () => {
  const { referent, element } = getValidArgs();
  console.log(referent.includes(element));
};

main();
