// Type aliases for better readability
type Greeting = 'hi' | 'bye';
type Rsponse = 'posted' | 'get';

// Function to greet and return a response
function sayHiBye(name: Greeting): Rsponse {
    if (name === 'hi') {
        console.log("hi");
        return 'posted';
    } else if (name === 'bye') {
        console.log("bye");
        return 'posted';
    } else {
        return 'get';
    }
}

// Example usage
console.log(sayHiBye("bye"));

