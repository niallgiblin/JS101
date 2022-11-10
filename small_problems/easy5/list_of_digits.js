function digitList(number) {
  let numberStringArray = String(number).split("");
  let numberArray = []

  for (let idx = 0; idx < numberStringArray.length; idx += 1) {
    let digit = parseInt(numberStringArray[idx], 10);
    numberArray.push(digit);
  }
 return numberArray;
}

console.log(digitList(1234));
