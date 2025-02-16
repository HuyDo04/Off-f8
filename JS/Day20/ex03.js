// const usersGroupByAddress = {
//     BacGiang: [{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }],
//     LangSon: [
//     { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
//     { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
//     ],
//     HaNoi: [
//     { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
//     { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
//     ],
//     };

// let usersGroupByAddress = {};

// for(let i = 0; i <users.length; i++) {
//     if(!usersGroupByAddress[users[i].address]) {
//         usersGroupByAddress[users[i].address] = [];
//     }
//     usersGroupByAddress[users[i].address].push(users[i]);
 
// }
// console.log(usersGroupByAddress)
// console.log(usersGroupByAddress);
// (usersGroupByAddress["LangSon"]) 


// const users = [
//     { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
//     { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
//     { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
//     { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
//     { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
//     ];

//     console.log(users[0].address)

// const usersGroupByAddress = {
// BacGiang: [{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }],
// LangSon: [
// { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
// { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
// ],
// HaNoi: [
// { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
// { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
// ],
// };


// let userGroup = {};
// for (let i = 0 ; i < users.length; i++) {
//     if(!userGroup[users[i]]) {
//         userGroup[users[i]] = [];
//     }
//     userGroup[users[i]].push(users[i]);
// }
// console.log({userGroup})

const students = [
    { name: 'Nguyen Van A', score: 9 },
    { name: 'Tran Thi B', score: 7 },
    { name: 'Le Van C', score: 5 },
    { name: 'Pham Thi D', score: 3 },
    { name: 'Doan Van E', score: 10 },
    { name: 'Hoang Thi F', score: 6 },
];


// {
//     highest: { name: 'Doan Van E', score: 10 },
//     lowest: { name: 'Pham Thi D', score: 3 },
//     group: {
//         A: [
//             { name: 'Nguyen Van A', score: 9 },
//             { name: 'Doan Van E', score: 10 },
//         ],
//         B: [
//             { name: 'Tran Thi B', score: 7 },
//             { name: 'Hoang Thi F', score: 6 },
//         ],
//         C: [
//             { name: 'Le Van C', score: 5 },
//         ],
//         D: [
//             { name: 'Pham Thi D', score: 3 },
//         ],
//     },
// }
let highest = students[0];
let lowest = students [0];

const group = {
    A:[], 
    B:[],
    C:[],
    D:[]
};
function groupStudents (students) {
   for (let i = 0; i < students.length; i++) {
    if(students[i].score > highest.score ) {
        highest = students[i];
    }
    if(students[i].score < lowest.score ) {
        lowest = students[i];
    }
    if(students[i].score >= 8 && students[i].score <= 10) {
        group.A.push(students[i]);
    } else if (students[i].score >= 6) {
        group.B.push(students[i]);
    }else {
        group.C.push(students[i]);
    }
   }

   return{highest,
          lowest,
          groups: group
}
}

console.log(groupStudents(students))
