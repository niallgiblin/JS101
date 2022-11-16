function wordCap(words) {
return words.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(wordCap('the javaScript language'));