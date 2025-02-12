// const arr = [1,2,3,4,5]

// const [first, second,...rest] = arr;

// console.log(first)
// console.log(rest)

// const arr1 = [1,2,3,4,5];

// const arr3 = [...arr, ...arr1]
// console.log(arr3)

// const arr1Copy = [...arr1];
// console.log(arr1Copy);
// console.log(arr1Copy === arr1);
// console.log(arr1Copy[4][0]);
// arr1Copy[4][0] = 1000;
// console.log(arr1Copy);
// console.log(arr1)

// const arr1 = [1,2,3,4,5];
// const arr1DeepCopy = structuredClone(arr1)
// console.log(arr1DeepCopy)

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat(arr2)
console.log(arr3);

const arr4 = arr1.concat();
console.log(arr4);
