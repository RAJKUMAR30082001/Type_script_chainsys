"use strict";
// Determine if a given year is a leap year or not
// Use a descriptive variable name
const inputYear = 2004;
// Check if the year is divisible by 400
if (inputYear % 400 === 0) {
    console.log("Leap Year");
}
// Check if the year is not divisible by 100 and divisible by 4
else if (inputYear % 100 !== 0 && inputYear % 4 === 0) {
    console.log("Leap Year");
}
// If none of the above conditions are met, it's not a leap year
else {
    console.log("Not a Leap Year");
}
