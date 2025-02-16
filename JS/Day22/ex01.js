// const userInfor = {
//     email:"gmail@gmail.com",
//     age:21,
//     username:"A"
// };
// console.log(userInfor);

// // key-value
// // key có thể nhận string hoặc symbol
// // value có thể nhận bất cứ giá trị nào, khi valueu là function thì gọi đó là phương thức
// // Khai bao voi new
// const obj = new Object({
//     mail: "gmail1@gmail.com",
//     username : "A",
//     fullname:"Nguyen Van A",
//     learn: function(time) {
//         console.log(`${this.fullname} Môn học ${time}`)
//     }
// })

// console.log(obj)
// obj.learn("JS co ban")
// obj["sở thích"] = ["ăn"]
// console.log(obj)
// let myKey = "hobbies";
// obj[myKey] = ["Coding"]
// console.log(obj)

const arrayInfor = [
	["username", "hoangnm"],
	["email", "hoang@gmail.com"],
	["password", "123456"],
];

const objInfor = {};
// doi mang thanh obj

// for(item of arrayInfor){
//     objInfor[item[0]]= item[1];
// }
// console.log(objInfor)

for(let i = 0; i < arrayInfor.length;i++){
    objInfor[arrayInfor[i][0]] = arrayInfor[i][1];
    console.log(objInfor[arrayInfor[i][0]]);
}

console.log(objInfor);

