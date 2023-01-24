function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum+= number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(100));
