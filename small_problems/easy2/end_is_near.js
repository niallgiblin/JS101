function penultimate(words) {
  let string = words.split(" ");
  return string[string.length - 2];
}

console.log(penultimate("Launch School is great!") === "is");