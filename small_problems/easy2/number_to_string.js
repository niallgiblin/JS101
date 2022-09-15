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

console.log(integerToString(5000))
