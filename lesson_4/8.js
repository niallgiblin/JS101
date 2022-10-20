/*given an array of names, I need to output an object that lists each name as a key and the value being the index position within the given array
Each name is a string.
*/
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {}

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

console.log(flintstonesObj);

