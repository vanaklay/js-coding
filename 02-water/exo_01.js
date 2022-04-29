const array = [];

for (let i = 0; i < 1000; i++) {
  const zeroFilled = ('000' + i).substr(-3);
  if (
    parseInt(zeroFilled[0]) <= parseInt(zeroFilled[1]) &&
    parseInt(zeroFilled[0]) != parseInt(zeroFilled[1]) &&
    parseInt(zeroFilled[1]) <= parseInt(zeroFilled[2]) &&
    parseInt(zeroFilled[1]) != parseInt(zeroFilled[2]) &&
    parseInt(zeroFilled[0]) != parseInt(zeroFilled[2])
  ) {
    array.push(zeroFilled);
  }
}

console.log(array.join(', '));
