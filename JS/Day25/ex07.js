
// Array.prototype.map2 = function (callback, thisArg) {
//     thisArg = this;
//     const newArray = [];
//     for(let i of thisArg) {
//         const result = callback(i);
//         newArray.push(result)
//     }
//     return newArray;
// };

Array.prototype.map2 = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        result[i] = callback((this[i]), i, this);
      }
    }
    return result;
  };
// Sample usage

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1); // [2, 4, 6, 8, 10]
console.log(result1.length); // 5

// Sample 2
const arr2 = [1, , , , 5]; // Có phần tử trống
const result2 = arr2.map2((value) => value * 2);

console.log(result2); // [2, empty, empty, empty, 10]
console.log(result2.length); // 5
