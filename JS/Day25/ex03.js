function Person(name) {
    this.name = name;
    this.greet1 = function () {
        console.log(`${this.name}`)
    }
}

Person.prototype.greet2 = function() {
    console.log(`${this.name}`);
}

const john = new Person("John");
const hoang = new Person("hoang");

console.log(john.hasOwnProperty("greet1"));
console.log(john.hasOwnProperty("greet2"));
