function leadingSubstrings(str) {
let substr = []
for (let length = 1; length <= str.length; length += 1) {
  substr.push(str.slice(0, length));
}
return substr;
}

console.log(leadingSubstrings('xyzzy'));