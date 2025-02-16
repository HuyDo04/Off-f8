// let myNumber = 10;
// myNumber = 20;
// console.log(myNumber);

// const userInfo = {
//     email: "gmail@gmail.com",
// }

// const user2Info = userInfo;
// user2Info.password = "123456";
// console.log(user2Info);
// // day là cách copy không an toàn

const userInfo = {
        email: "gmail@gmail.com",
    };
const user2Info = {
    password : "123456",
};

const newUserInfo = Object.assign(userInfo, user2Info,{age:24});
console.log(newUserInfo)
console.log(userInfo)

// muốn copy obj thì có thể assign với target obj là obj rỗng {}
const inforUserA = Object.assign({}, userInfo);
console.log(inforUserA)

inforUserA.fullname= "nguyen van A"
console.log(inforUserA)
console.log(userInfo)

