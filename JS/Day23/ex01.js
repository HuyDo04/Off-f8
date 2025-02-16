const myStudents = ["Do", "Trung", "Phong","Anh"];
// slice(): không thay đổi mảng gốc
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
console.log(myStudents.slice(2,3));// ['Phong']
console.log(myStudents)//  ['Do', 'Trung', 'Phong', 'Anh']

// splice(): thay đổi mảng gốc
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
const result = myStudents.splice(2)
console.log(result)//  ['Phong', 'Anh']
console.log(myStudents)// ['Do', 'Trung']

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1,"jonh");
console.log(removed);
console.log(myFish);


const myArr = ["Hoang", 0, null, "F8", "Học lập trình", 100, undefined];

for (let i = 0; i < myArr.length; i++) {
    if (!myArr[i]) {
        myArr.splice(i, 1); 
        // thay đổi mảng
        i--;
    }
}

console.log(myArr);

// cach2
// const newArr = [];
// for(let i = 0;i < myArr.length;i++) {
//    if(myArr[i]) {
//         newArr.push(myArr[i])
//    }
// }