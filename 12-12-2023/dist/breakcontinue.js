"use strict";
// Declare an array with elements of type number, string, or boolean
const myArray = [1, 2, 3, 4, 'yes', 3, 9, 'no', true];
// Generate a random start index within the array length
const startIndex = Math.floor(Math.random() * myArray.length);
// Iterate over the array starting from the random index
for (let i = startIndex; i < myArray.length; i++) {
    // Retrieve the current item at index i
    const currentItem = myArray[i];
    // Exit the loop if a boolean is encountered
    if (typeof currentItem === 'boolean') {
        break;
    }
    // Log string items to the console
    if (typeof currentItem === 'string') {
        console.log(currentItem);
    }
    else {
        // Continue to the next iteration for non-string, non-boolean items
        continue;
    }
}
