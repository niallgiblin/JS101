let rl = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome. Give me six numbers and I'll tell you if the sixth number is also among the first five numbers.");

prompt("Enter your first number:");
let num1 = rl.question();

prompt("Enter your second number:");
let num2 = rl.question();

prompt("Enter your third number:");
let num3 = rl.question();

prompt("Enter your forth number:");
let num4 = rl.question();

prompt("Enter your fifth number:");
let num5 = rl.question();

prompt("Enter your sixth and last number:");
let num6 = rl.question();

if (num6 === num5 || num6 === num4 || num6 === num3 || num6 === num2 || num6 === num1) {
console.log(`The number ${num6} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`);
} else
console.log(`The number ${num6} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`);