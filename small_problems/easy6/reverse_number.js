function reverseNumber(number) {
  let numberStringArray = String(number).split('');
  let reversedStringedNum = numberStringArray.reverse().join('');
  return parseInt(reversedStringedNum, 10);
}

