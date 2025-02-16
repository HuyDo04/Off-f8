// document.getElementById("id").onclick = function () {
//     alert("Hello")
// }

// Cấu trúc cây DOM
/**
 * Element node
 * Atribute node
 * Text node
 */
const h1Element = document.getElementById("id");
const h1Element1 = document.getElementsByTagName("h1")[0];
const h1Element2 = document.getElementsByClassName("title")[0];

console.log(h1Element)
console.log({h1Element1})
console.log(h1Element2)

document.querySelectorAll(".example").style