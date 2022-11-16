function swapName(name) {
  let words = name.split(' ');
  return `${words[words.length - 1]}, ${words.slice(0, words.length - 1).join(' ')}`;
}

console.log(swapName('Niall John James Giblin'));