function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(' ').map(function (word) {
    return word + ' ' + String(word.length);
  });
}

console.log(wordLengths("It ain't easy, is it?"));