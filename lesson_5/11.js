let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let objAddOne = {};

  for (let key in obj) {
    objAddOne[key] = obj[key] + 1;
  }

  return objAddOne;
})

console.log(newArr);
console.log(arr);