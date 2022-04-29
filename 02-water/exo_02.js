const twoDigitsCombined = [];

for (let i = 0; i < 100; i++) {
  const iZeroFilled = ('00' + i).substr(-2);
  for (let j = i + 1; j < 100; j++) {
    const jZeroFilled = ('00' + j).substr(-2);
    twoDigitsCombined.push(`${iZeroFilled} ${jZeroFilled}`);
  }
}

console.log(twoDigitsCombined.join(', '));
