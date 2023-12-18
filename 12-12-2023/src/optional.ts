// Define a type for the greet function
type GreetFunction = (name: string, greeting?: string) => string;

// Define the greet function using an arrow function
const greet: GreetFunction = (name, greeting) => `${greeting ?? 'Hello'}, ${name}!`;

// Log the results of calling the greet function
console.log(greet('raj'));
console.log(greet('hi', 'how are you')); // Output: "how are you, hi!"



