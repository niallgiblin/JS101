function isPalindrome(text) {
  if (text === text.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('racecar'))