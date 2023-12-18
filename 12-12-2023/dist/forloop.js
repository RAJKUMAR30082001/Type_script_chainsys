"use strict";
// Declare an array of numbers
const numberArray = [];
// Add values to the array using a for loop
for (let i = 0; i < 10; i++) {
    numberArray.push(Math.floor(Math.random() * 256));
}
// Log the values using a for...of loop
for (const value of numberArray) {
    console.log(value);
}
// Declare an object
const studentObject = {
    stdName: "raj",
    age: 22,
    department: 'mca'
};
// Iterate through the object using a for...in loop
for (const key in studentObject) {
    // Check if the property belongs to the object itself (not from the prototype chain)
    if (studentObject.hasOwnProperty(key)) {
        console.log(studentObject[key]);
    }
}
