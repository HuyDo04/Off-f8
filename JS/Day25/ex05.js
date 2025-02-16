const person = Object.create(Object.prototype, {
    name:{value:"Hoang", writable:true, enumerable:true,configurable:true},
    age:{value:30, writable:false, enumerable:true, configurable:true},
    address: {value:"BG",writable:false, enumerable:true, configurable:true}
})

console.log(person.name)

person.name = "mike";
console.log(person.name);

console.log(person.age)
person.age = 35;
console.log(person.age)

console.log(person)

person.address = "HN";
console.log(person.address)

for (const key in person) {
 console.log(key)
}