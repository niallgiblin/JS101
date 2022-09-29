function runningTotal(array) {
  let newArray = [];
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    newArray.push((sum += array[i]));
  }

  return newArray;
};

console.log(runningTotal([14, 11, 7, 15, 20]))