crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

function crunch(str) {
let crunchStr = '';
  let i = 0;

  while (i <= str.length - 1) {
    if (str[i] !== str[i + 1]) {
      crunchStr += str[i];
    }
    i += 1;
  }
  return crunchStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'))