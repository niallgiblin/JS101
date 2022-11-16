function substrings(str) {
  let substrings = [];
  for (let start = 0; start < str.length; start += 1) {
    let substr = str.substring(start);
    substrings = substrings.concat(leadingSubstrings(substr));
  }
  return substrings
  }

  function leadingSubstrings(str) {
    let substr = []
    for (let length = 1; length <= str.length; length += 1) {
      substr.push(str.slice(0, length));
    }
    return substr;
    }

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

console.log(palindromes('hello-madam-did-madam-goodbye'));


