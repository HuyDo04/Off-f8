const Person = {
    greet() {
        console.log("hello")
    }
}

const student = Object.create(Person);
student.study = function() {
    console.log("study..");
}

student.greet();
student.study();

