const getFilename = () => {
  const argv = process.argv[1].split('/');
  const filename = argv[argv.length - 1];
  return filename;
};

console.log(getFilename());
