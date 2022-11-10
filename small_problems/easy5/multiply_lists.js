function multiplyList(numbers1, numbers2) {
  let result = [];

  for (let idx = 0; idx < numbers1.length; idx += 1) {
    result.push(numbers1[idx] * numbers2[idx]);
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));