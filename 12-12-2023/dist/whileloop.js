"use strict";
// Define a generic union array to store numbers or booleans
const mixedArray = [];
// Set the initial value of num
let num = 5;
// Generate random numbers or add boolean true to the array based on the value of num
while (num > 0) {
    // Generate a random number between 0 and 11
    const randomValue = Math.floor(Math.random() * 12);
    mixedArray.push(num % 2 === 0 ? randomValue : true);
    // Decrement num
    num -= 1;
}
// Log the resulting array
console.log("Mixed Array:", mixedArray);
