function fibonacci(n) {
  let lastTwo = [1, 1];

  for (let counter = 3; counter <= n; counter += 1) {
    lastTwo = [lastTwo[1], lastTwo[0] + lastTwo[1]];
}
return lastTwo[1];
}

console.log(fibonacci(75));