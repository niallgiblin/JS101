function sum(num) {
  return String(num).split("").reduce((accum, digit) => accum + Number(digit), 0);
}

console.log(sum(123));