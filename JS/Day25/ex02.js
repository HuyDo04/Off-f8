// class Person {
//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.getInfor = function () {
//             console.log(`${name} ${address}`);
//         };
//     }
// }

// const Person1 = new Person("A", 24, "HN")
// console.log(Object.getPrototypeOf(Person1))

function Cart(products, userId) {
    this.products = products,
    this.userId = userId,
    this.getTotal = function () {
        let total = this.products.reduce((acc,cur) => {
            acc += cur.quantity * cur.price;
            return acc
        },0)
        return total
    }
}

const products = [
    {id:1, title:"tomato", quantity:4, price:1},
    {id:2, title:"apple", quantity:2, price:2},
    {id:3, title:"tomato", quantity:4, price:1}
]

const totalCard = new Cart(products,1)
console.log(totalCard.getTotal())