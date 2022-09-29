function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(`Teddy is ${getRandomNumber(20, 120)} years old!`)