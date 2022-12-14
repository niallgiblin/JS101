const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let string = '';
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    string = DIGITS[remainder] + string;
  } while (number > 0);
  return string;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");