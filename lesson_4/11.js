let statement = "The Flintstones Rock";
let letterCounter = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  letterCounter[char] = letterCounter[char] || 0;
  letterCounter[char] += 1;
}

console.log(letterCounter)
