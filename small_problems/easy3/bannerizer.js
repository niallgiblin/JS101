function logInBox(text) {
  let across = `+${"-".repeat(text.length + 2)}+`;
  let down = `|${" ".repeat(text.length + 2)}|`;

  console.log(across);
  console.log(down);
  console.log(`| ${text} |`);
  console.log(down);
  console.log(across);
}

console.log(logInBox("Hello!"))