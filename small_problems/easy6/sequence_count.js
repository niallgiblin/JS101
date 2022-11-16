function sequence(count, start) {
let array = [];
for (let num = 1; num <= count; num++) {
  array.push(num * start);
}
return array;
}

console.log(sequence(5, 1))