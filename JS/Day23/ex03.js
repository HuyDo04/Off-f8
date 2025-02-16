const arr1 = [1,2,3,4,5,6,7]
const result = arr1.filter((item) => item % 2 === 0);
console.log(result)

const result2 = arr1.filter((item) => item > 10)
console.log(result2)

const products = [
    {id : 1, title:"Sản phẩm A",price:200,quantity:2,discount:0.1},
    {id : 2, title:"Sản phẩm B",price:300,quantity:2,discount:0.2},
    {id : 3, title:"Sản phẩm C",price:400,quantity:2,discount:0.3},
    {id : 4, title:"Sản phẩm D",price:500,quantity:2,discount:0.05},
]
    const result3 = products.filter((item) => item.discount >= 0.2);
    console.log(result3);

let pay = 0;

    // products.forEach((item) => {
    //    pay += item.price * item.quantity * (1 - item.discount);
    // })

    // console.log(pay)

    // const newProduct = products.map((item) => {
    //     console.log(item)
    //     return item.title
    // })
    // console.log(newProduct);

    // const amount = products.map((item) => {
    //     const total = item.price * item.quantity * (1 - item.discount);
    //     item.total = total;
    //     return item
    // })
    // console.log(amount)

    const newProducts = products.map((item) => {
        const newItem = {...item, amount:item.price * item.quantity * (1 - item.discount)};
        return newItem;
    })
    console.log(newProducts)