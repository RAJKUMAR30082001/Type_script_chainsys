"use strict";
// This function calculates the sum of two numbers
function calculateSum(values) {
    return values.a + values.b;
}
// This function calls calculateSum to get the sum of two numbers
function getSum(values) {
    return calculateSum(values);
}
// Input parameters for the calculation
const inputParams = {
    a: 5,
    b: 6
};
// Log the result of the calculation
console.log(getSum(inputParams));
