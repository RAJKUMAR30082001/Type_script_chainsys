// Function using a union of parameters and return types
function unionOfParameters(a: string | number, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // sum of numbers
    } else if (typeof a === 'string' && typeof b === 'string') {
        return `concatenated string: ${a}${b}`;
    } else {
        return 'Invalid parameters'; // handle other cases
    }
}

// Example usage
console.log(unionOfParameters(3, 5)); // Output: 8
console.log(unionOfParameters('Hello', ' World')); // Output: concatenated string: Hello World
console.log(unionOfParameters('Hello', 5)); // Output: Invalid parameters

