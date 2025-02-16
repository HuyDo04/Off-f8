// const students = [
//     {fullname:"A", age:22, pay:20000},
//     {fullname:"B", age:22, pay:1000000},
//     {fullname:"C", age:18, pay:300000},
// ];

// let total = 0;
// for (item of students) {
//     // if(item.age < 20) {
//     //     console.log(item);
//     // }
//     let total = 0
//     if(item.pay) {
//         total += item.pay;
//     }
// }
// console.log(total);

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas labore, officiis, debitis cum rem reiciendis suscipit nisi facere repellendus consectetur quasi fugit cumque dicta ea error, sint temporibus. Saepe, odit?";
// let count = 0;
// for(let i = 0; i < paragraph.length; i++) {
//     if(paragraph[i] == ""){
//         count++;
//     }
// }
// console.log(count);
function countWords(p) {
    let count = 0;
    for(let i = 1; i <p.length; i++) {
        if(p[i] === " ") {
            count++;
        }
    }
    return count + 1;
}

console.log(countWords(paragraph));