const arr1 = [1,4,5,6,7];
arr1.sort();
console.log(arr1);


const products = [
    {id : 1, title:"Sản phẩm A",price:200,quantity:2,discount:0.1},
    {id : 2, title:"Sản phẩm B",price:300,quantity:1,discount:0.2},
    {id : 3, title:"Sản phẩm C",price:400,quantity:3,discount:0.3},
    {id : 4, title:"Sản phẩm D",price:500,quantity:2,discount:0.05},
]

products.sort((a,b) => a.quantity - b.quantity)
console.log(products)

// a - b > 0  tang dan
// a - b < 0  giam dan

function sortProduct (data,valueSelect) {
    if(valueSelect === 0) {
        data.sort((a,b) => {
            if(a.title < b.title) {
                return -1;
            }
        })    
    } else if (valueSelect === 1){
        data.sort((a,b) => {
            if(a.title > b.title) {
                return -1;
            } 
        })    
    } else if(valueSelect === 2) {
        data.sort((a,b) => a.price - b.price);    
    }else if(valueSelect === 3){
        data.sort((a,b) => b.price - a.price);    
    } else {
        data.sort((a,b) => a.discount - b.discount);    
    }
}

sortProduct(products,0);
console.table(products)

const students = [
    {id: 1, fullname :"Nguyen Manh Huy", age:18},
    {id: 2, fullname :"nguyen Minh Hoang", age:18},
    {id: 1, fullname :"Vu Huy Do", age:18},
    {id: 1, fullname :"Dang Nhat Minh", age:18},
    {id: 1, fullname :"Vu Huy Minh", age:18},
]

students.sort((a,b)=> {
    const firstName1 = a.fullname.split(" ").slice(-1)[0];
    const firstName2 = b.fullname.split(" ").slice(-1)[0];
    // console.log({firstName1, firstName2})
    if(firstName1 > firstName2) {
        return 1
    } else if (firstName1 < firstName2) {
        return -1
    } else {
        const lastName1 = a.fullname.split(" ").slice(0, -1).join(" ");
        const lastName2 = b.fullname.split(" ").slice(0, -1).join(" ");
       if(lastName1 < lastName2) {
            return - 1;
        } 
    }
   
});

console.log(students);


