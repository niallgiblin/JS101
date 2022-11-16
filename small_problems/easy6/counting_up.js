function sequence(limit) {
  let result = [];

  for (let num = 1; num <= limit; num++) {
    result.push(num);
  }
  return result;
}

console.log(sequence(5));