function multiplicativeAverage(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}

console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));