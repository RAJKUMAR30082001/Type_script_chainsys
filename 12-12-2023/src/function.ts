// Define a type for better readability
type Values = {
    a: number;
    b: number;
};

// This function calculates the sum of two numbers
function calculateSum(values: Values): number {
    return values.a + values.b;
}

// This function calls calculateSum to get the sum of two numbers
function getSum(values: Values): number {
    return calculateSum(values);
}

// Input parameters for the calculation
const inputParams: Values = {
    a: 5,
    b: 6
};

// Log the result of the calculation
console.log(getSum(inputParams));
