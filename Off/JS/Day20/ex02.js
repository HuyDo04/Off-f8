const membersK11 = ["a","b","c","d","e"];
// unshift them phan tu vao dau mang
membersK11.unshift("ABC", "BCD", {userName : "F8" ,});
console.log(membersK11);
// 
const list = [1, 2, 3, 4];
console.log(list)
// shift xoa phan tu dau mang
list.shift();
console.log(list);
// 
// push them phan tu cuoi mang
list.push(5);
console.log(list.push())
console.log(list)
// 
// pop xoa phan tu cuoi mang
console.log(list.pop())
console.log(list)
// 
// unshift - push 
// shift - pop

const users = [
    {fullname: "Nguyen Van A", age:20},
    {fullname: "Nguyen Van B", age:22},
    {fullname: "Nguyen Van C", age:21},
    {fullname: "Nguyen Van D", age:18},
    {fullname: "Nguyen Van E", age:32},
]

// let newArray = [];

// for(let i = users.length - 1; i >= 0; i--) {
//     newArray.push(users[i]);
// }

// console.log(newArray);
// // 
// let usersArray = [];
// for(let i = 0 ; i < length.users; i++) {
//     if(users.age >= 20) {
//         usersArray.push(users[i]);
//     }
// }

// console.log(usersArray);


// const users = [
//     { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
//     { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
//     { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
//     { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
//     { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
//     ];

const newUsers = [];
for (let i = users.length - 1; i >= 0; i--) {
newUsers.push(users[i]);
}
console.log(newUsers);
const newUsers2 = [];
for (let i = 0; i < users.length; i++) {
newUsers2.unshift(users[i]);
}
console.log(newUsers2);
const newUsers3 = [];
for (let i = 0; i < users.length; i++) {
if (users[i].age >= 20) {
newUsers3.push(users[i]);
}
}
console.log(newUsers3);