let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//Array with colors of the fruits and the sizes of the vegetables. 
//The sizes should be uppercase, and the colors should be capitalized.
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let capitalize = (word => word[0].toUpperCase() + word.slice(1));

let arr = Object.values(obj).map(colorSize => {
  if (colorSize.type === 'fruit') {
    return colorSize['colors'].map(first => capitalize(first));
  }
  else 
  return colorSize['size'].toUpperCase();
});

  console.log(arr);

