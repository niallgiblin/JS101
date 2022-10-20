let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesSum = 0
Object.values(ages).forEach(age => agesSum += age);

console.log(agesSum)