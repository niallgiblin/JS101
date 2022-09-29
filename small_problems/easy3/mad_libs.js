/*Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.*/

let rl = require("readline-sync");

console.log("Enter a noun:");
let noun = rl.prompt();

console.log("Enter a verb:");
let verb = rl.prompt();

console.log("Enter an adjective:");
let adjective = rl.prompt();

console.log("Enter an adverb:");
let adverb = rl.prompt();

let line1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let line2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let line3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(line1);
console.log(line2);
console.log(line3);