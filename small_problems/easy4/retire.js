let rl = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("What is your age?");
let ageNow = rl.question();

prompt("What age would you like to retire?");
let retireAge = rl.question();

let yearsUntil = (retireAge - ageNow);
let retireYear = 2022 + yearsUntil;

console.log(`It's 2022. You will retire in ${retireYear}. You have ${yearsUntil} years to go! `)
