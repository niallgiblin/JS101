let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(elements) {
let occurrences = {}

for (let idx = 0; idx < elements.length; idx += 1) {
  occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
  occurrences[elements[idx]] += 1;
}
  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

console.log(countOccurrences(vehicles));