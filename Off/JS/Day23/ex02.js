// find
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);

// findLast
const found2 = array1.findLast((element) => element > 10);
console.log(found2)

// findIndex
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

// findLastIndex
const array3 = [5, 12, 50, 130, 44];
const isLargeNumbers = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

// include()
const array4 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat',NaN];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
console.log(pets.includes(NaN));
