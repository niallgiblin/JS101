function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));