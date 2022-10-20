//Compute and display the total age of the male members of the family.
//get male members
//add and display their total age

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munsterInfo = Object.values(munsters);
let maleAges = 0;

munsterInfo.forEach(member => {
  if (member.gender === 'male') {
    maleAges += member.age;
  }
})
console.log(maleAges);