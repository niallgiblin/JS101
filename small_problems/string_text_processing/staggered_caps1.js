function staggeredCase(string) {
  return string.split('').map((char, i) => {
    if (i % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
  }
}).join('');
}

console.log(staggeredCase("Let's see if this works!"));