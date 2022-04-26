const getAlphabet = () => {
  const alphabet = [];
  for (let i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  return alphabet.join('');
};

console.log(getAlphabet());
