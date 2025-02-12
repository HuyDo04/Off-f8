const userInfor = {
    username: "A",
    email:"gmail.com"
}

const obj = {
    address: "BG"
}

const userInforCopy = {...userInfor, ...obj, password:"123"};
console.log(userInforCopy);
console.log(userInfor);
console.log(userInforCopy===userInfor)


const {username, email,address, password} = userInforCopy;
console.log(username, address);
if(address === "BG") {
    console.log(email,password)
}

// 11:41

