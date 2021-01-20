class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return(this.firstName + ' ' + this.lastName);
    }
}

var student = new Student('Tom', 'Smith');

console.log(student);

console.log(JSON.stringify(student));