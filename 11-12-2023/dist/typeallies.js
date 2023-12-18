"use strict";
// Type aliases are used to reuse code and make it more readable
function displayStudentInfo(num, name) {
    console.log(`Name of student: ${name} \nPassword: ${num}`);
}
displayStudentInfo(123456, "raj");
function findProduct(product) {
    console.log(`Name of product: ${product.name} \nPrice: ${product.price} \nAvailable: ${product.available}`);
}
findProduct({
    name: "laptop",
    price: 12345,
    available: true
});
let arr = [1, 2, 3];
console.log(arr);
