var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullname = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(parameter) {
    return "Hello," + parameter.firstName + " " + parameter.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
console.log(user);
