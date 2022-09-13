const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt('Hello! I can help calculate your monthly car payment.');

prompt('How much are you borrowing total?');
let loanAmount = readline.question();
while (isInvalidNumber(loanAmount)) {
  prompt('Please enter a valid amount.');
  loanAmount = readline.question();
}

prompt("What is the APR? (Enter percentage number only)");
let apr = Number(readline.question()) / 100;

while (isInvalidNumber(apr)) {
  prompt('Please enter a valid number.');
  apr = readline.question();
}

prompt("How many months is the loan?");
let loanDuration = readline.question();

while (isInvalidNumber(loanDuration)) {
  prompt('Please enter a valid number.');
  loanDuration = readline.question();
}

let monthlyInterestRate = apr / 12;

let monthlyPayment = loanAmount * (monthlyInterestRate /
(1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

function formatMoney(monthlyPayment) {
  return monthlyPayment.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

console.log(formatMoney(monthlyPayment));