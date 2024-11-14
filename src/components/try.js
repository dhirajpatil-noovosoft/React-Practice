const array = [{a:5}];

// Find the first element greater than 10
const found = array.find(element => element.a > 1);

console.log(found); // Output: 12
found.a = 15
console.log(array)