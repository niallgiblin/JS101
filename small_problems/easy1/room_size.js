const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Would you like to measure the room in meters or in feet?\nType 1 for meters\nType 2 for feet');
let unit = readline.question();

prompt('What is the length of the room?');
let length = readline.question();

prompt('What is the width of the room?');
let width = readline.question();

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * 10.7639)

if (unit === '2') {
  console.log(`The room is ${areaInFeet} square feet.`)
}
else {
  console.log(`The room is ${areaInMeters} square meters.`)
}