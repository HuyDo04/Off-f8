// for(let i = 0; i < arrayInfor.length;i++){
//     objInfor[arrayInfor[i][0]] = arrayInfor[i][1];
// }

// console.log(objInfor);

const myCar = {
    brand: "Mitsubishi",
    name:"Xforce",
    color:"white",
    version:2024,
}

for (key in myCar) {
    console.log(`gia tri của ${key} là ${myCar[key]}`);
}

// phuong thức tạo ra mảng  các keys của object
console.log(Object.keys(myCar));
// phuong thức tạo ra mảng  các values của object
console.log(Object.values(myCar));
// 
console.log(Object.entries(myCar));




