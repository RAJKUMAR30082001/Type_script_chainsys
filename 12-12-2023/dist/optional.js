"use strict";
// Define the greet function using an arrow function
const greet = (name, greeting) => `${greeting !== null && greeting !== void 0 ? greeting : 'Hello'}, ${name}!`;
// Log the results of calling the greet function
console.log(greet('raj'));
console.log(greet('hi', 'how are you')); // Output: "how are you, hi!"
