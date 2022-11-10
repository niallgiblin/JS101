function noDuplication(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function comboArray(array1, array2) {
  let newArray = [];
  noDuplication(newArray, array1);
  noDuplication(newArray, array2);
  return newArray;
}

console.log(comboArray([1, 3, 5], [3, 6, 9]));