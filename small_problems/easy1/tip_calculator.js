const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is the bill amount?');
let billAmount = parseFloat(readline.question());

prompt('What percentage would you like to tip?');
let tipPercentage = parseFloat(readline.question());

let tipAmount = billAmount * (tipPercentage / 100);
let totalAmount = billAmount + tipAmount;

console.log(`Your tip total will be $${tipAmount}, bringing your total amount to $${totalAmount}`)