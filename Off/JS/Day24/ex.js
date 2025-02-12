/**
 * arr.reduce(callback, initialValue)
 * - callback - là tham số bắt buộc.
 * - initialValue - là tham số không bắt buộc.
 */

// const arr = [1, 2, 4, 7, 3];

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//  total += arr[i];
// }
// console.log(total);

// const result = arr.reduce((accumulator, currentValue, currentIndex, originArray) => {
//  // console.table({ accumulator, currentValue, currentIndex, originArray });
//  return (accumulator += currentValue);
// }, 0);

// console.log(result);

// Tìm lớn nhất nhỏ nhất..
// const max = arr.reduce((accumulator, currentValue) => {
//  let max = currentValue > accumulator ? currentValue : accumulator;
//  return max;
// }, 0);
// console.log(max);

// Bài toán nhóm phần tử theo thuộc tính

// const employees = [
//  { id: 1, name: "Hoang", homeTown: "Hanoi" },
//  { id: 2, name: "An", homeTown: "Thaibinh" },
//  { id: 3, name: "Huy", homeTown: "Langson" },
//  { id: 4, name: "Dinh", homeTown: "Saigon" },
//  { id: 5, name: "Dong", homeTown: "Saigon" },
//  { id: 6, name: "Nhinh", homeTown: "Langson" },
// ];

// const groupedEmployees = employees.reduce((acc, item) => {
//  const homeTown = item.homeTown;
//  if (!acc[homeTown]) {
//   acc[homeTown] = [];
//  }
//  acc[homeTown].push(item);
//  return acc;
// }, {});

// console.log(groupedEmployees);

// const products = [
//  { id: 1, name: "iphone 16", price: 2000, category: "phone" },
//  { id: 1, name: "tivi sony", price: 2000, category: "tivi" },
//  { id: 1, name: "tivi samsung", price: 2000, category: "tivi" },
//  { id: 1, name: "tai nghe abc", price: 2000, category: "phukien" },
// ];

// const groupedProducts = products.reduce((acc, item) => {
//  const cate = item.category;
//  if (!acc[cate]) {
//   acc[cate] = [];
//  }
//  acc[cate].push(item);
//  return acc;
// }, {});
// console.log(groupedProducts);

// Bài toán phát hiện phần tử trùng lặp

const arr = [1, 2, 2, 4, 6, 4, 10, 4]

const uniqueNumbers = arr.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item)
  }
  return acc
}, [])
console.log(uniqueNumbers)

// Đếm số lần xuất hiện của phần tử trong mảng.

const brands = ['Samsung', 'Apple', 'Oppo', 'Huawei', 'Samsung', 'Apple']

const result = brands.reduce((acc, current) => {
  if (!acc[current]) {
    acc[current] = 1
  } else {
    acc[current]++
  }
  return acc
}, {})
console.log(result)

const products = [
  { id: 1, name: 'Galaxy 20', price: 200, brand: 'Samsung' },
  { id: 1, name: 'Galaxy 21', price: 200, brand: 'Samsung' },
  { id: 1, name: 'Galaxy A', price: 200, brand: 'Samsung' },
  { id: 1, name: 'Galaxy Note 20', price: 200, brand: 'Samsung' },
  { id: 1, name: 'Apple Watch 4', price: 200, brand: 'Apple' },
  { id: 1, name: 'Iphone 12 pro max', price: 200, brand: 'Apple' },
]
// Output:

const output = { Samsung: 4, Apple: 2 }

const productsQuantityByBrands = products.reduce((acc, current) => {const brand = current.brand
    if (!acc[brand]) {
      acc[brand] = 1
    } else {
      acc[brand]++
    }
    return acc
  }, {})
  console.log(productsQuantityByBrands)
  
  // Các lỗi thường gặp:
  // 1. Quên hoặc nhầm initialValue
  //

  const students = [
    { id: 1, name: 'Nguyen Manh Huy', age: 18 },
    { id: 2, name: 'Nguyen Thanh An', age: 18 },
    { id: 3, name: 'Phan Tuan Manh', age: 18 },
    { id: 4, name: 'Nguyen Truong Giang', age: 15 },
    { id: 5, name: 'Tran Ngoc Duy', age: 18 },
    { id: 6, name: 'Hoang Thanh Huy', age: 18 },
    { id: 7, name: 'Nguyen The Han', age: 18 },
    { id: 8, name: 'Le Huu Trong', age: 17 },
    { id: 9, name: 'Vu Quoc Dung', age: 18 },
    { id: 10, name: 'Nguyen Hai Duong', age: 18 },
    { id: 11, name: 'Nguyen Trung Hieu', age: 18 },
    { id: 12, name: 'Tran Duy Dong', age: 18 },
    { id: 13, name: 'Tran Minh Hoang', age: 18 },
    { id: 14, name: 'Nguyen Minh Hoang', age: 18 },
    { id: 15, name: 'Nhung', age: 18 },
    { id: 16, name: 'Nguyễn Nhung', age: 18 },
  ]
  
  students.sort((a, b) => {
    const firstNameA = a.name.split(' ').slice(-1)
    const firstNameB = b.name.split(' ').slice(-1)
    // console.log({ firstNameA, firstNameB });
    if (firstNameA > firstNameB) {
      return 1
    } else if (firstNameA < firstNameB) {
      return -1
    } else {
      // logic để sắp xếp theo họ và tên đệm.
      const lastNameA = a.name.split(' ').slice(0, -1).join(' ')
      const lastNameB = b.name.split(' ').slice(0, -1).join(' ')
      console.log({ lastNameA, lastNameB })
      if (lastNameA > lastNameB) {
        return 1
      } else if (lastNameA < lastNameB) {
        return -1
      } else {
        return 0
      }
  
      // Nếu tên của các học viên giống nhau thì chỉ cần quay lại so sánh cả chuỗi họ+tên đệm + tên
      // if (a.name > b.name) {
      //  return 1;
      // } else if (a.name < b.name) {
      //  return -1;
      // } else {
      //  return 0;
      // }
    }
  })
  console.log(students)
  
  /**
   * ## Bài 2: Dùng chính kết quả sau khi đã sắp xếp ở bài 1 để hiển thị thông tin ra màn hình với các yêu cầu sau:
  
  - Sử dụng phương thức `map()` để tạo ra một mảng mới chứa thông tin của học viên nhưng tên của học viên được viết hoa.
    - Ví dụ: "Nguyen Thanh An" -> "NGUYEN THANH AN".
  - Với những học viên có tuổi dưới 18, thêm thuộc tính "isUnderage" với giá trị là `true`, còn lại học viên từ đủ 18 tuổi trở lên thì thuộc tính "isUnderage" có giá trị là `false`.
  - Đưa toàn bộ thông tin của học viên ra màn hình (bao gồm id, name, age).
  - Với những học viên có tuổi dưới 18 tuổi thì giá trị tuổi được tô màu đỏ và in đậm.
   */
  
  const content = students
    .map((item) => {
      item.name = item.name.toUpperCase()
      if (item.age < 18) {
        item.isUnderage = true
      } else {
        item.isUnderage = false
      }
      let itemContent = `
     <div>
      <h3>name: ${item.name}</h3>
      <p>id: ${item.id}</p>
      ${item.isUnderage ? `<p class="underage"> age: ${item.age}</p>` : `<p>age: ${item.age}</p>`}
     <div>
    `
      return itemContent
    })
    .join('')
  
  document.write(content)