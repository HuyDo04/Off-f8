class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.getInfor = function () {
            console.log(`${name} ${address}`);
        };
    }
}

const student1 = new Person("Dung", 24, "Thai Binh")
const student2 = new Person("Du", 24, "Thai Binh")
console.log(student1)

Person.prototype.sayHello = function ()  {
    console.log(`${this.name} ${this.address}`)
}

student1.sayHello();
student2.getInfor();

let myStr = new String("Xin chao");
console.log(myStr)
console.log( myStr.valueOf());