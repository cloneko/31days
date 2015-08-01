class Student {
    fullname : string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullname = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(parameter: Person) {
    return "Hello," + parameter.firstName + " " + parameter.lastName;
}

var user = new Student("Jane", "M.", "User"); 

document.body.innerHTML = greeter(user);
console.log(user);
