"use strict";
class Person {
    // Constructor with parameters for name and age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Create an instance of the Person class
const john = new Person("John", 25);
// Log the value of the readonly property "name"
console.log(john.name); // Output: John
// Uncommenting the line below will result in a compilation error
// john.name = "NewName";
