const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to the sum or product of consecutive integers machine where you input an integer greater than zero and I return either the sum of the numbers from 1 to your number or the product of the numbers from 1 to you number. The choice is yours. How exciting.');

prompt('First, please enter an integer greater than 0');
let integer = readline.question();

prompt('Press s if you want the sum.\nPress p if you want the product.')
let operation = readline.question();

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

if (operation === 's') {
let sum = computeSum(integer)
console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
}
else {
  let product = computeProduct(integer)
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`)
}