function repeater(string) {
  return string.split("").map(char => char + char).join("");
}

console.log(repeater('hello'));