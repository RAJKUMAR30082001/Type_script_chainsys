"use strict";
const a = [1, 2, 3, 4, 5]; //array with manipulation
for (const element of a) {
    console.log(element);
}
let tup;
tup = ["hello", 7, 'raj', true]; //tuple declaration and assignment
console.log(tup);
// Using an object to associate additional data with each enum member
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "Apple";
    Fruit["Banana"] = "banana";
    Fruit["Orange"] = "Orange";
})(Fruit || (Fruit = {}));
const fruitPrices = {
    [Fruit.Apple]: 1.0,
    [Fruit.Banana]: 0.5,
    [Fruit.Orange]: 1.2,
};
console.log(fruitPrices);
console.log(Fruit);
//any
let x = "I am not checked by TS";
x = 42;
console.log(x);
//void
function sum(x, y) {
    console.log(x + y);
}
sum(3, 4);
