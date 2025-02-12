let str = " Hello Javascript! "

// - -> 0
console.log(str.substring(2,5))
console.log(str.substring(5,2))
console.log(str.substring(-5,2))
console.log(str.substring(-1,200))
console.log(str.substring(NaN,8))
console.log(str.substring(NaN,8))

console.log(str.slice(2,5))
console.log(str.slice(5,2))
console.log(str.slice(-5,2))
console.log(str.slice(-1,200))
console.log(str.slice(NaN,8))
console.log(str.slice(NaN,8))

console.log(str.repeat(3))

console.log(str.trim())


