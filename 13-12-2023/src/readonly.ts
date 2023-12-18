class Person {
    readonly name: string;
    age: number;

    // Constructor with parameters for name and age
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Attempting to uncomment the setName method will result in a compilation error
    // setName(newName: string): void { this.name = newName; }
}

// Create an instance of the Person class
const john: Person = new Person("John", 25);

// Log the value of the readonly property "name"
console.log(john.name); // Output: John

// Uncommenting the line below will result in a compilation error
// john.name = "NewName";

