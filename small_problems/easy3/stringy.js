function stringy(num) {
  let str = "";
  for (i = 0; i < num; i++) {
    let integer = ((i % 2) === 0) ? 1 : 0;
    str += integer;
  }
  return str;
}

console.log(stringy(70))