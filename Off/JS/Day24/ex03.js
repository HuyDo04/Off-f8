// const groupedEmployees = employees.reduce((acc, item) => {
//      const homeTown = item.homeTown;
//      if (!acc[homeTown]) {
//       acc[homeTown] = [];
//      }
//      acc[homeTown].push(item);
//      return acc;
//     }, {});
    
//     console.log(groupedEmployees);
    
const arr2 = ["tomato", "banana","hotdog","orange"," apple","orange","banana","banana"];

const foodList = arr2.reduce((acc, cur) => {
    if (!acc[cur]) {
        acc[cur] = 1
      } else {
        acc[cur]++
      }
      return acc
    }, {})
console.log(foodList);

const foodList1 = arr2.reduce((acc, cur) => {
    console.log(acc.includes(cur))
    if (!acc.includes(cur)) {
        acc.push(cur)
      }
      return acc
    }, []);
console.log(foodList1);

const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
    ];
    // Nhóm các học viên cùng address sử dụng reduce
    // Output:
    const usersGroupByAddress = {
    BacGiang: [{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }],
    LangSon: [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
    ],
    HaNoi: [
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
    ],
    };


// const listUsers = users.reduce((acc,cur) => {
//     // console.log(cur)
//     const newAddress = cur.address;
//     if(!acc[newAddress]) {
//          acc[newAddress] = [];
//     }
//     acc[newAddress].push(cur);
//     // acc[newAddress] = cur;
//     return acc;

// },{})
// console.log(listUsers)

const list = users.reduce((acc, cur) => {
  // Assuming `cur.property` is the key you want to group by
  const key = cur.property; 
  console.log(key)
  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(cur); // Add the current user to the correct group
  return acc;
}, {});

console.log(list)
