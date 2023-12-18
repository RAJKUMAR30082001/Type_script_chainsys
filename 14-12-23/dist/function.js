"use strict";
//function with default parameter
function addd(a, b = 10) {
    return a + b;
}
console.log(addd(7)); // a is a actual parameter
//rest parameter
function removedup(a) {
    let arr = new Set(a); //set function always have unique value 
    return arr;
}
console.log(removedup([1, 1, 12, 3, 45, 6, 75, 75, 3]));
