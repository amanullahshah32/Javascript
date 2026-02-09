'use strict';

const Person = function(firstName, birthYear){
    this.firstName  = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2026 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function(){
    console.log(`My Name is: ${this.firstName} \n and I study: ${this.course}`);
}
const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);