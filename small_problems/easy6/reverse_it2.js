function reverseWords(str) {
  let words = str.split(' ')
  let reversedWords = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    let currentWord = words[idx];
    if (currentWord.length >= 5) {
      reversedWords.push(reverseWord(currentWord));
    } else {
      reversedWords.push(currentWord);
    }
  }

  return reversedWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Walk around the block'));