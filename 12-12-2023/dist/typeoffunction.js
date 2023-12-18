"use strict";
// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
// Calling the addNumbers function explicitly
const result = addNumbers(10, 30);
console.log(result);
// Function to print elements of an array
function printArray(arr) {
    for (const num of arr) {
        console.log(num);
    }
}
// Array of numbers
const numbersArray = [1, 2, 3, 4, 5];
// Calling the printArray function
printArray(numbersArray);
// Arrow function to calculate the sum of an array
const CalculateSum = (numbers) => numbers.reduce((total, num) => total + num, 0);
// Calling the calculateSum arrow function
const sumResult = CalculateSum(numbersArray);
console.log("The sum is " + sumResult);
