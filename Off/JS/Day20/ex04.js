
const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
    ]

const userList = ["A","B","C", NaN];
// console.log(userList[1])

// tim tu phan tu dau
const result = userList.indexOf("C")

// lastindexOf tim tu phan tu cuoi
console.log(result)

// incule -> true or false
console.log(userList.includes(undefined));

// join
const myString = userList.join(" ");
const myString1 = userList.join();
console.log(myString);
console.log(myString1);

const paragraph = "xin chao toi la hoc vien f8";
console.log(paragraph.split(" "));

// const words = paragraph;
// console.log(words.reverse());
const list = [1,2,3,4,5,6];
list.toString();
console.log(list.reverse());